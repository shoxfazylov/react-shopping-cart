import styled from '@emotion/styled'

import { media } from 'styled/media'

import { CarBrandsList } from 'components/cars/CarBrandsList/CarBrandsList.styled'
import { CarSearchByParams } from 'components/cars/CarSearchByParams/CarSearchByParams.styled'

const media610 = media.createMedia(610)

export const CategoriesOriginalSparePartsPage = styled.div`
  h2 {
    margin-top: 40px;
  }

  ${CarBrandsList}, ${CarSearchByParams} {
    margin-top: 20px;
  }

  ${media610} {
    h2 {
      font-size: 20px;
      white-space: normal;
    }
  }
`
