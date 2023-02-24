import { useQuery, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'

import { supplierAPI } from 'api'

interface ToggleStoreStatus {
  id: number
  enabled: boolean
}

interface UseStoresProps {
  storeId?: number
  storesPage?: number
  onEditSuccess?: () => void
  onAddSuccess?: () => void
}

export const useStores = ({
  storeId,
  storesPage,
  onEditSuccess,
  onAddSuccess
}: UseStoresProps = {}) => {
  const queryClient = useQueryClient()

  const stores = useQuery(
    ['stores', storesPage],
    () => (storesPage ? supplierAPI.getStores(storesPage) : null),
    {
      enabled: !!storesPage
    }
  )

  const addStore = useMutation(supplierAPI.addStore, {
    onError: () => {
      toast.error('Ошибка добавления магазина')
    },
    onSuccess: () => {
      if (onAddSuccess) {
        onAddSuccess()
      }

      toast.success('Магазин успешно добавлен')

      queryClient.invalidateQueries(['stores', storesPage])
    }
  })

  const store = useQuery(
    ['store', storeId],
    () => (storeId ? supplierAPI.getStore(storeId) : null),
    {
      enabled: !!storeId
    }
  )

  const editStore = useMutation(supplierAPI.editStore, {
    onError: () => {
      toast.error('Ошибка изменения магазина')
    },
    onSuccess: () => {
      if (onEditSuccess) {
        onEditSuccess()
      }

      toast.success('Магазин успешно изменён')

      return queryClient.invalidateQueries(['store', storeId])
    }
  })

  const enableStore = useMutation(supplierAPI.enableStore)
  const disableStore = useMutation(supplierAPI.disableStore)

  const toggleStoreStatus = ({ id, enabled }: ToggleStoreStatus) => {
    if (enabled) {
      enableStore.mutate(id)
    } else {
      disableStore.mutate(id)
    }
  }

  return {
    stores,
    store,
    addStore,
    editStore,
    toggleStoreStatus
  }
}
