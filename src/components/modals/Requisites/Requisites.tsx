import { FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { TextField, BikField, Button } from 'ui'

import * as S from './Requisites.styled'

interface FormFields {
  name: string
  accountNumber: string
  bik: string
}

interface OnSubmitProps {
  purpose: 'add' | 'edit'
  requisites: FormFields
}

interface RequisitesModalProps {
  open: boolean
  requisites?: FormFields
  isChanging: boolean
  purpose: 'add' | 'edit'
  onSubmit: (props: OnSubmitProps) => void
  onClose: () => void
}

export const RequisitesModal = ({
  open,
  requisites,
  isChanging,
  purpose,
  onClose,
  onSubmit
}: RequisitesModalProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    if (requisites) {
      reset(requisites)
    } else {
      reset({})
    }
  }, [requisites, open, reset])

  const purposeText = purpose === 'edit' ? 'Изменить реквизиты' : 'Добавить реквизиты'

  const onFormSubmit = ({ name, accountNumber, bik }: FormFields) => {
    onSubmit({ purpose, requisites: { name, accountNumber, bik } })
  }

  return (
    <S.RequisitesModal
      title={purposeText}
      open={open}
      onClose={() => {
        onClose()
      }}
    >
      <FormProvider {...useFormProps}>
        <S.Form onSubmit={handleSubmit(onFormSubmit)}>
          <TextField name="name" label="Название" />
          <TextField name="accountNumber" label="Номер счёта" type="number" />
          <BikField name="bik" />

          <Button type="submit" loading={isChanging} fullWidth>
            {purposeText}
          </Button>
        </S.Form>
      </FormProvider>
    </S.RequisitesModal>
  )
}
