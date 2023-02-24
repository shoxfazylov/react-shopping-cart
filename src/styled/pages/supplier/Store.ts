import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

export const StoreBox = styled(Box)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`

export const StoreTop = styled(Box)`
  padding: 20px 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #e3e3e8;

  h2 {
    font-family: 'TTCommons';
    white-space: normal;
  }

  ${media.mobile} {
    padding: 20px;
  }
`
