import styled from '@emotion/styled'

import { media } from 'styled/media'

import { Box } from 'common/Box/Box.styled'

const media860 = media.createMedia(860)

export const Orders = styled.div`
  ${media860} {
    ${Box} {
      background: transparent;
      box-shadow: none;
      padding-top: 0;

      & > h4 {
        display: none;
      }
    }
  }
`
