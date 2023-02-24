import styled from '@emotion/styled'

import { Wrapper } from 'styled/components'
import { media } from 'styled/media'

import { CarModels } from 'components/cars/CarModels/CarModels.styled'
import { PageTitle } from 'components/PageTitle/PageTitle.styled'

export { Wrapper }

export const SparePartsCarModelsPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${PageTitle} {
    margin-bottom: 10px;
  }

  footer {
    margin-top: auto;
  }
`

export const PageSubtitle = styled.p`
  line-height: 20px;
  color: #7a7680;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 30px;
  padding-bottom: 60px;

  ${CarModels} {
    margin-top: 30px;
  }

  ${media.laptop} {
    padding-bottom: 40px;
  }
`
