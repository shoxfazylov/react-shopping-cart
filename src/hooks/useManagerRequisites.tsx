import { useQuery, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'

import { managerAPI } from 'api'
import { ChangeRequisite, CreateRequisite } from 'api/account/account.types'

interface UseRequisitesProps {
  userId?: number
  onEditSuccess: () => void
  onAddSuccess: () => void
}

export const useManagerRequisites = ({
  userId,
  onEditSuccess,
  onAddSuccess
}: UseRequisitesProps) => {
  const queryClient = useQueryClient()

  const { data: requisites } = useQuery(
    ['requisites', userId],
    () => managerAPI.getRequisites({ userId }),
    {
      enabled: !!userId
    }
  )

  const addRequisites = useMutation(
    ({ userId, name, accountNumber, bik }: CreateRequisite) =>
      managerAPI.createRequisite({ userId, name, accountNumber, bik }),
    {
      onError: () => {
        toast.error('Ошибка добавления реквизитов')
      },
      onSuccess: () => {
        if (onAddSuccess) {
          onAddSuccess()
        }

        toast.success('Реквизиты успешно добавлены')

        queryClient.invalidateQueries(['requisites', userId])
      }
    }
  )

  const editRequisites = useMutation(
    ({ id, userId, name, accountNumber, bik }: ChangeRequisite) =>
      managerAPI.changeRequisite({ id, userId, name, accountNumber, bik }),
    {
      onError: () => {
        toast.error('Ошибка изменения реквизитов')
      },
      onSuccess: () => {
        if (onEditSuccess) {
          onEditSuccess()
        }

        toast.success('Реквизиты успешно изменены')

        queryClient.invalidateQueries(['requisites', userId])
      }
    }
  )

  const deleteRequisites = useMutation((id: number) => managerAPI.deleteRequisite(id), {
    onError: () => {
      toast.error('Ошибка удаления реквизитов')
    },
    onSuccess: () => {
      toast.success('Реквизиты успешно удалены')

      queryClient.invalidateQueries(['requisites', userId])
    }
  })

  return {
    requisites,
    addRequisites,
    editRequisites,
    deleteRequisites
  }
}
