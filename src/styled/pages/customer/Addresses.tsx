import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

import { AddressList } from 'components/AddressList/AddressList.styled'
import { Actions } from 'components/EditDeleteCard/EditDeleteCard.styled'

const media600 = media.createMedia(600)

export { Box }

export const CustomerAddressesPage = styled.div`
  ${media600} {
    ${Box} {
      padding: 30px 15px;
    }

    ${AddressList} {
      ${Actions} {
        position: absolute;
        right: 35px;
      }
    }
  }
`
