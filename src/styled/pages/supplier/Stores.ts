import styled from '@emotion/styled'

import { media } from 'styled/media'

import { AccountPageTitle } from 'components/AccountPageTitle/AccountPageTitle.styled'
import { Box } from 'common/Box/Box.styled'

const media880 = media.createMedia(880)

export const SupplierStoresPage = styled.div`
  ${media880} {
    ${Box} {
      background: transparent;
      box-shadow: none;
    }
  }

  ${media.mobile} {
    ${AccountPageTitle} {
      flex-direction: column;
      gap: 10px;
    }
  }
`
