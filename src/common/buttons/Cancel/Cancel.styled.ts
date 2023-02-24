import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface CancelButtonProps {
  flexible: boolean
}

export const CancelButton = styled.button<CancelButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid #c5c3c8;
  border-radius: 6px;
  box-sizing: border-box;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  svg path {
    transition: 0.3s;
  }

  &:hover {
    background: var(--color-red);
    border-color: var(--color-red);
    color: #fff;

    svg path {
      stroke: #fff;
    }
  }

  ${({ flexible }) =>
    flexible &&
    css`
      width: auto;
      height: auto;
      padding: 3px 12px 3px 6px;

      svg {
        margin-right: 5px;
      }
    `}
`
