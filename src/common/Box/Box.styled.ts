import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Box as BoxStyled } from 'styled/components'

interface ContentProps {
  noPaddings?: boolean
}

export const Box = styled(BoxStyled)<ContentProps>`
  padding-top: 20px;

  & > h4 {
    padding: 0 20px;
    font-weight: 500;
  }

  ${({ noPaddings }) =>
    noPaddings &&
    css`
      padding-top: 0;
      padding: 0;
    `}
`

export const Content = styled.div<ContentProps>`
  padding: 20px;

  ${({ noPaddings }) =>
    noPaddings &&
    css`
      padding: 0;
    `}
`
