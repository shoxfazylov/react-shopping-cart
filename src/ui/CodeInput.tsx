import styled from '@emotion/styled'
import { css } from '@emotion/react'

import ReactCodeInput from 'react-verification-code-input'

export const CodeInput = styled(({ error, ...props }) => <ReactCodeInput {...props} />)`
  & > div {
    display: flex;
    justify-content: space-between;

    input {
      border: 1px solid #dedee2;
      font-family: 'TTCommons';
      font-size: 16px;
      color: var(--color-black);
      outline: none;
      padding: 0;

      &:focus {
        border-color: #dedee2;
        caret-color: #000;
      }

      &:not(:last-child) {
        border-right: none;
      }

      &:last-child,
      &:focus + input {
        border-color: #dedee2;
        border-left: 1px solid #dedee2;
      }
    }
  }

  ${({ error }) =>
    error &&
    css`
      & > div input {
        border-color: var(--color-red);
        background: rgba(255, 104, 104, 0.05);

        &:focus,
        &:last-child,
        &:focus + input {
          border-color: var(--color-red);
          border-left: 1px solid var(--color-red);
        }
      }
    `}
`
