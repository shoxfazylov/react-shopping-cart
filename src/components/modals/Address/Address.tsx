import { useForm, FormProvider } from 'react-hook-form'
import { useEffect } from 'react'

import { TextField, Button } from 'ui'

import { Address } from 'types/account'

import * as S from './Address.styled'

interface FormFields {
  name: string
  postalCode: string
  city: string
  street: string
  house: string
  building?: string
  apartment: string
}

interface OnSubmitProps {
  purpose: 'edit' | 'add'
  address: FormFields
}

interface AddressModalProps {
  open: boolean
  address?: Address
  purpose: 'edit' | 'add'
  isChanging: boolean
  onClose: () => void
  onSubmit: (props: OnSubmitProps) => void
}

export const AddressModal = ({
  open,
  address,
  purpose,
  isChanging,
  onClose,
  onSubmit
}: AddressModalProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    if (address) {
      const { name, postalCode, city, street, house, building, apartment } = address

      reset({
        name,
        postalCode,
        city,
        street,
        house,
        building: building ?? undefined,
        apartment
      })
    } else {
      reset({})
    }
  }, [address, open, reset])

  const purposeText = purpose === 'edit' ? 'Изменить адрес' : 'Добавить адрес'

  const onFormSubmit = ({
    name,
    postalCode,
    city,
    street,
    house,
    building,
    apartment
  }: FormFields) => {
    onSubmit({
      purpose,
      address: {
        name,
        postalCode,
        city,
        street,
        house,
        building,
        apartment
      }
    })
  }

  return (
    <S.AddressModal
      title={purposeText}
      open={open}
      onClose={() => {
        onClose()
      }}
    >
      <FormProvider {...useFormProps}>
        <S.Form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField name="name" label="Название" />
          <TextField name="postalCode" label="Индекс" type="number" />
          <TextField name="city" label="Город" />
          <TextField name="street" label="Улица" />

          <S.HouseRow>
            <TextField name="house" label="Дом" />
            <TextField name="building" label="Корпус" type="number" rules={{ required: false }} />
            <TextField name="apartment" label="Офис/Квартира" type="number" />
          </S.HouseRow>

          <Button type="submit" loading={isChanging} fullWidth>
            {purposeText}
          </Button>
        </S.Form>
      </FormProvider>
    </S.AddressModal>
  )
}
