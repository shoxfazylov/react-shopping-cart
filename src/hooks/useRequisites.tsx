import { useQuery, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'

import { accountAPI } from 'api'
import { ChangeRequisite, CreateRequisite } from 'api/account/account.types'

interface UseRequisitesProps {
  onEditSuccess?: () => void
  onAddSuccess?: () => void
}

export const useRequisites = ({ onEditSuccess, onAddSuccess }: UseRequisitesProps = {}) => {
  const queryClient = useQueryClient()

  const requisites = useQuery('requisites', accountAPI.getRequisites)

  const addRequisites = useMutation(
    ({ userId, name, accountNumber, bik }: CreateRequisite) =>
      accountAPI.createRequisite({ userId, name, accountNumber, bik }),
    {
      onError: () => {
        toast.error('Ошибка добавления реквизитов')
      },
      onSuccess: () => {
        if (onAddSuccess) {
          onAddSuccess()
        }

        toast.success('Реквизиты успешно добавлены')

        queryClient.invalidateQueries('requisites')
      }
    }
  )

  const editRequisites = useMutation(
    ({ id, userId, name, accountNumber, bik }: ChangeRequisite) =>
      accountAPI.changeRequisite({ id, userId, name, accountNumber, bik }),
    {
      onError: () => {
        toast.error('Ошибка изменения реквизитов')
      },
      onSuccess: () => {
        if (onEditSuccess) {
          onEditSuccess()
        }

        toast.success('Реквизиты успешно изменены')

        queryClient.invalidateQueries('requisites')
      }
    }
  )

  const deleteRequisites = useMutation((id: number) => accountAPI.deleteRequisite(id), {
    onError: () => {
      toast.error('Ошибка удаления реквизитов')
    },
    onSuccess: () => {
      toast.success('Реквизиты успешно удалены')

      queryClient.invalidateQueries('requisites')
    }
  })

  return {
    requisites,
    addRequisites,
    editRequisites,
    deleteRequisites
  }
}
