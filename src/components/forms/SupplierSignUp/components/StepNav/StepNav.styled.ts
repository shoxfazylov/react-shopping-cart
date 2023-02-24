import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { media } from 'styled/media'

import { Button } from 'ui'
import { Button as ButtonStyled } from 'ui/Button/Button.styled'

const media500 = media.createMedia(500)

export const StepNav = styled.div`
  margin-top: auto;
  padding: 25px 60px;
  border-top: 1px solid #e3e3e8;

  ${ButtonStyled} {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  ${media.laptop} {
    padding: 20px 30px;
  }

  ${media500} {
    padding: 20px;
  }
`

export const StepPrevButton = styled(Button)`
  width: 121px;
  flex-direction: row-reverse;
  background: #f4f5f7;
  color: #7a7680;

  &:hover {
    background: #f4f5f7;
  }

  svg {
    transform: rotate(180deg);
  }
`

export const StepNextButton = styled(Button)`
  width: 121px;

  svg path {
    stroke: #fff;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      svg path {
        stroke: #7a7680;
      }
    `}
`

export const CompleteButton = styled(Button)`
  width: auto;
  padding: 14px 33.5px 12px;
`
