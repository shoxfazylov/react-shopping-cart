import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { media } from 'styled/media'

interface BoxProps {
  haveSpacing?: boolean
}

export const Box = styled.div<BoxProps>`
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  overflow: hidden;

  ${({ haveSpacing }) =>
    haveSpacing &&
    css`
      padding: 30px;

      ${media.mobile} {
        padding: 30px 15px;
      }
    `}
`
