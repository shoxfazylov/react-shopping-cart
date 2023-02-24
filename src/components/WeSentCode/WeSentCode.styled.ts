import styled from '@emotion/styled'

import { CodeInput } from 'ui'

import { Button } from 'ui/Button/Button.styled'

export const WeSentCode = styled.div`
  text-align: center;

  p {
    &:first-child {
      line-height: 20px;

      span {
        font-weight: 500;
        line-height: 22px;
      }
    }

    &:nth-child(3) {
      margin-top: 20px;
    }
  }

  ${CodeInput} {
    margin: 20px auto 0;
  }

  ${Button} {
    margin-top: 20px;
    color: var(--color-green-200);
  }
`
