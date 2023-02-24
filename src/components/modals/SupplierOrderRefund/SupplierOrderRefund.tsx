import { FormProvider, useForm } from 'react-hook-form'

import { Button, Select, Textarea } from 'ui'

import * as S from './SupplierOrderRefund.styled'

interface FormFields {
  reason: string
  reasonOther: string
}

interface SupplierOrderRefundModalProps {
  open: boolean
  isRefunding: boolean
  onOrderRefund: (reason: string) => void
  onClose: () => void
}

export const SupplierOrderRefundModal = ({
  open,
  isRefunding,
  onOrderRefund,
  onClose
}: SupplierOrderRefundModalProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, watch, getValues } = useFormProps

  const refundReasons = [
    { label: 'Причина 1', value: 'причина 1' },
    { label: 'Причина 2', value: 'причина 2' },
    { label: 'Причина 3', value: 'причина 3' },
    { label: 'Другое', value: 'other' }
  ]

  const onOrderRefundSubmit = ({ reason, reasonOther }: FormFields) => {
    if (getValues('reason') === 'other') {
      onOrderRefund(reasonOther)
    } else {
      onOrderRefund(reason)
    }
  }

  return (
    <FormProvider {...useFormProps}>
      <S.SupplierOrderRefundModal title="Возврат заказа" open={open} onClose={onClose}>
        <S.Form onSubmit={handleSubmit(onOrderRefundSubmit)}>
          <Select name="reason" label="Причина" options={refundReasons} />

          {watch('reason') === 'other' && (
            <Textarea name="reasonOther" placeholder="Описание причины" />
          )}

          <Button type="submit" fullWidth loading={isRefunding}>
            Осуществить возврат
          </Button>
        </S.Form>
      </S.SupplierOrderRefundModal>
    </FormProvider>
  )
}
