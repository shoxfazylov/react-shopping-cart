import styled from '@emotion/styled'

import { CarDetailsTable } from 'components/tables/CarDetails/CarDetails.styled'

export const OriginalSparePartsVehiclesPage = styled.div``

export const CarTypes = styled.div``

export const CarType = styled.div`
  ${CarDetailsTable} {
    margin-top: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const FindedCar = styled.div`
  display: flex;
  justify-content: flex-start;
`
