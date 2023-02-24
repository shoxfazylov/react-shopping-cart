import { useQuery, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'

import { accountAPI } from 'api'
import { ChangeAddress, CreateAddress } from 'api/account/account.types'

interface UseAddressesProps {
  onEditSuccess?: () => void
  onAddSuccess?: () => void
}

export const useAddresses = ({ onEditSuccess, onAddSuccess }: UseAddressesProps = {}) => {
  const queryClient = useQueryClient()

  const addresses = useQuery('addresses', accountAPI.getAddresses)

  const addAddress = useMutation(
    ({ userId, name, postalCode, city, street, house, building, apartment }: CreateAddress) =>
      accountAPI.createAddress({
        userId,
        name,
        postalCode,
        city,
        street,
        house,
        building,
        apartment
      }),
    {
      onError: () => {
        toast.error('Ошибка добавления адреса')
      },
      onSuccess: () => {
        if (onAddSuccess) {
          onAddSuccess()
        }

        toast.success('Адрес успешно добавлен')

        queryClient.invalidateQueries('addresses')
      }
    }
  )

  const editAddress = useMutation(
    ({ id, userId, name, postalCode, city, street, house, building, apartment }: ChangeAddress) =>
      accountAPI.changeAddress({
        id,
        userId,
        name,
        postalCode,
        city,
        street,
        house,
        building,
        apartment
      }),
    {
      onError: () => {
        toast.error('Ошибка изменения адреса')
      },
      onSuccess: () => {
        if (onEditSuccess) {
          onEditSuccess()
        }

        toast.success('Адрес успешно изменён')

        queryClient.invalidateQueries('addresses')
      }
    }
  )

  const deleteAddress = useMutation((id: number) => accountAPI.deleteAddress(id), {
    onError: () => {
      toast.error('Ошибка удаления адреса')
    },
    onSuccess: () => {
      toast.success('Адрес успешно удалён')
      queryClient.invalidateQueries('addresses')
    }
  })

  return {
    addresses,
    addAddress,
    editAddress,
    deleteAddress
  }
}
