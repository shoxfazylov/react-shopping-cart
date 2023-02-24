import { FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { TextField, PhoneField, EmailField, Button, AddressField, Skeleton } from 'ui'

import * as S from './Store.styled'

interface FormFields {
  name: string
  city: string
  address: string
  lat: number
  lng: number
  phone: string
  email: string
  desc?: string
}

interface StoreFormProps {
  fields?: Partial<FormFields>
  isChanging?: boolean
  readOnly?: boolean
  onSubmit?: (props: FormFields) => void
}

export const StoreForm = ({
  fields,
  isChanging = false,
  readOnly = false,
  onSubmit
}: StoreFormProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    if (fields) {
      reset(fields)
    }
  }, [fields, reset])

  const onFormSubmit = ({ name, city, address, lat, lng, phone, email, desc }: FormFields) => {
    if (onSubmit) {
      onSubmit({ name, city, address, lat, lng, email, phone, desc })
    }
  }

  return (
    <FormProvider {...useFormProps}>
      <S.StoreForm onSubmit={handleSubmit(onFormSubmit)}>
        {!isChanging ? (
          <>
            <TextField name="name" label="Название" InputProps={{ readOnly }} />
            <AddressField disableMap readOnly={readOnly} />
            <PhoneField name="phone" InputProps={{ readOnly }} />
            <EmailField name="email" InputProps={{ readOnly }} />
            <TextField
              name="desc"
              label="Описание для покупателя"
              rules={{ required: false }}
              InputProps={{ readOnly }}
            />
          </>
        ) : (
          <S.SkeletonGrid>
            <Skeleton count={5} height={48} />
          </S.SkeletonGrid>
        )}

        {!readOnly && (
          <Button type="submit" fullWidth loading={isChanging}>
            Сохранить изменения
          </Button>
        )}
      </S.StoreForm>
    </FormProvider>
  )
}
