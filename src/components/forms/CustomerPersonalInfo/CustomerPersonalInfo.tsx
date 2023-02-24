import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { PersonFields } from 'components/forms'
import { Button } from 'ui'

import * as S from './CustomerPersonalInfo.styled'

interface FormFields {
  firstName: string
  middleName: string
  lastName: string
  phone: string
  email: string
}

interface CustomerPersonalInfoFormProps {
  isChanging: boolean
  fields?: FormFields
  onSubmit: (fields: FormFields) => void
}

export const CustomerPersonalInfoForm = ({
  isChanging,
  fields,
  onSubmit
}: CustomerPersonalInfoFormProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    if (fields) {
      reset(fields)
    }
  }, [reset, fields])

  const onFormSubmit = ({ firstName, middleName, lastName, phone, email }: FormFields) => {
    onSubmit({ firstName, middleName, lastName, phone, email })
  }

  return (
    <FormProvider {...useFormProps}>
      <S.CustomerPersonalInfoForm onSubmit={handleSubmit(onFormSubmit)}>
        <PersonFields />

        <Button type="submit" loading={isChanging}>
          Сохранить изменения
        </Button>
      </S.CustomerPersonalInfoForm>
    </FormProvider>
  )
}
