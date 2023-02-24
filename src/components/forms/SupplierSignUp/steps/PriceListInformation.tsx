import Typography from '@mui/material/Typography'

import { RadioGroup } from 'ui'

import * as S from '../SupplierSignUp.styled'

export const PriceListInformationStep = () => {
  const informationExchangeTypes = [
    { label: 'Протокол обмена API (с описанием преимуществ обмена по API)', value: 'API' },
    { label: 'Загрузка XLS/CSV прайс-листа с данными по остаткам', value: 'XLS' }
  ]

  return (
    <>
      <Typography variant="h4">
        Каким образом будете обмениваться с системой информацией о наличии.
      </Typography>

      <S.RadioGroupColumn>
        <RadioGroup
          name="priceList.informationExchange"
          options={informationExchangeTypes}
          defaultValue="API"
        />
      </S.RadioGroupColumn>
    </>
  )
}
