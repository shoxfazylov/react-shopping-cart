import { FormProvider, useForm } from 'react-hook-form'

import { Select, Button } from 'ui'

import { Product } from 'types/orders'

import * as S from './OrderProductsRefund.styled'

interface FormFields {
  products: number[]
}

interface OrderProductsRefundModalProps {
  open: boolean
  isRefunding: boolean
  products: Product[]
  onProductsRefund: (products: number[]) => void
  onClose: () => void
}

export const OrderProductsRefundModal = ({
  open,
  isRefunding,
  products,
  onProductsRefund,
  onClose
}: OrderProductsRefundModalProps) => {
  const useFormProps = useForm<FormFields>({
    defaultValues: {
      products: []
    }
  })
  const { handleSubmit } = useFormProps

  const productOptions = products.map(({ id, name }) => {
    return {
      label: name,
      value: id
    }
  })

  const onRefundSubmit = ({ products }: FormFields) => {
    onProductsRefund(products)
  }

  return (
    <FormProvider {...useFormProps}>
      <S.OrderProductsRefundModal title="Частичный возврат" open={open} onClose={onClose}>
        <S.Form onSubmit={handleSubmit(onRefundSubmit)}>
          <Select name="products" multiple label="Продукты" options={productOptions} />

          <Button type="submit" fullWidth loading={isRefunding}>
            Осуществить возврат
          </Button>
        </S.Form>
      </S.OrderProductsRefundModal>
    </FormProvider>
  )
}
