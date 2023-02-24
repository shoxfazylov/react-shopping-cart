import Typography from '@mui/material/Typography'

import { RadioGroup } from 'ui'

import * as S from '../SupplierSignUp.styled'

interface CourierItem {
  label: string
  value: 'oner' | 'yourself'
}

interface PickupItem {
  label: string
  value: 'available' | 'not-available'
}

export const DeliveryTypesStep = () => {
  const courierDelivery: CourierItem[] = [
    { label: 'Доставляет oner', value: 'oner' },
    { label: 'Доставляем сами', value: 'yourself' }
  ]

  const pickupFromStore: PickupItem[] = [
    { label: 'Доступен', value: 'available' },
    { label: 'Не доступен', value: 'not-available' }
  ]

  return (
    <>
      <S.RadioGroupRow>
        <Typography variant="h4">Курьерская доставка</Typography>
        <RadioGroup name="delivery.type" options={courierDelivery} defaultValue="oner" />
      </S.RadioGroupRow>

      <S.RadioGroupRow>
        <Typography variant="h4">Самовывоз из магазина</Typography>
        <RadioGroup name="delivery.pickup" options={pickupFromStore} defaultValue="available" />
      </S.RadioGroupRow>
    </>
  )
}
