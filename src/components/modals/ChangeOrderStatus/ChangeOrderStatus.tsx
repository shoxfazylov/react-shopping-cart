import { useForm, FormProvider } from 'react-hook-form'

import { OrderStatusSelect } from 'common'
import { Button } from 'ui'

import * as S from './ChangeOrderStatus.styled'
import { OrderStatus } from 'types/orders'
import { useEffect } from 'react'

interface FormFields {
  status: OrderStatus
}

interface ChangeOrderStatusModalProps {
  open: boolean
  status: OrderStatus
  isChanging: boolean
  onClose: () => void
  onSubmit: (status: OrderStatus) => void
}

export const ChangeOrderStatusModal = ({
  open,
  status,
  isChanging,
  onClose,
  onSubmit
}: ChangeOrderStatusModalProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  useEffect(() => {
    reset({ status })
  }, [status])

  const onStatusChangeSubmit = ({ status }: FormFields) => {
    onSubmit(status)
  }

  return (
    <S.ChangeOrderStatusModal title="Изменение статуса заказа" open={open} onClose={onClose}>
      <FormProvider {...useFormProps}>
        <S.Form onSubmit={handleSubmit(onStatusChangeSubmit)}>
          <OrderStatusSelect />

          <Button type="submit" fullWidth loading={isChanging}>
            Изменить статус
          </Button>
        </S.Form>
      </FormProvider>
    </S.ChangeOrderStatusModal>
  )
}
