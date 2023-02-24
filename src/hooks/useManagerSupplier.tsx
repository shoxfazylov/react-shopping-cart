import { useMutation, useQuery, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

import { managerAPI, supplierAPI } from 'api'

interface ToggleStoreStatus {
  id: number
  enabled: boolean
}

interface UseManagerSupplierProps {
  supplierId?: number
  onSendEmailSuccess?: () => void
}

export const useManagerSupplier = ({
  supplierId,
  onSendEmailSuccess
}: UseManagerSupplierProps = {}) => {
  const queryClient = useQueryClient()

  const { data: supplier, isLoading: isSupplierLoading } = useQuery(
    ['supplier', supplierId],
    () => (supplierId ? managerAPI.getSupplier(supplierId) : null),
    {
      enabled: !!supplierId
    }
  )

  const sendEmailToSupplier = useMutation(managerAPI.sendEmailToSupplier, {
    onError: () => {
      toast.error('Ошибка отправки сообщения')
    },
    onSuccess: () => {
      if (onSendEmailSuccess) {
        onSendEmailSuccess()
      }
      toast.success('Сообщение успешно отправлено')
    }
  })

  const editSupplierContactPerson = useMutation(managerAPI.changeSupplier, {
    onError: () => {
      toast.error('Ошибка изменения контактного лица')
    },
    onSuccess: () => {
      toast.success('Контактное лицо успешно изменено')
      return queryClient.invalidateQueries(['supplier', supplierId])
    }
  })

  const editSupplierEntityPerson = useMutation(supplierAPI.changeSupplierEntityData, {
    onError: () => {
      toast.error('Ошибка изменения юридического лица')
    },
    onSuccess: () => {
      toast.success('Юридическое лицо успешно изменено')
      return queryClient.invalidateQueries(['supplier', supplierId])
    }
  })

  const archiveOrder = useMutation(managerAPI.archiveOrder, {
    onError: () => {
      toast.error('Ошибка помещения в архив')
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['supplier', supplierId])
      toast.success('Заказ помещён в архив')
    }
  })

  const unarchiveOrder = useMutation(managerAPI.unarchiveOrder, {
    onError: () => {
      toast.error('Ошибка разахивирования заказа')
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['supplier', supplierId])
      toast.success('Заказ разархивирован')
    }
  })

  const enableStore = useMutation(managerAPI.enableStore, {
    onSuccess: () => {
      queryClient.invalidateQueries(['supplier', supplierId])
    }
  })

  const disableStore = useMutation(managerAPI.disableStore, {
    onSuccess: () => {
      queryClient.invalidateQueries(['supplier', supplierId])
    }
  })

  const changeSupplierMainRequisites = useMutation(managerAPI.changeSupplierMainRequisites, {
    onSuccess: () => {
      queryClient.invalidateQueries(['supplier', supplierId])
    }
  })

  const toggleStoreStatus = ({ id, enabled }: ToggleStoreStatus) => {
    if (enabled) {
      enableStore.mutate(id)
    } else {
      disableStore.mutate(id)
    }
  }

  return {
    supplier,
    isSupplierLoading,
    sendEmailToSupplier,
    editSupplierContactPerson,
    editSupplierEntityPerson,
    archiveOrder,
    unarchiveOrder,
    toggleStoreStatus,
    changeSupplierMainRequisites
  }
}
