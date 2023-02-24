import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { ButtonProps } from '@mui/material/Button'

import { Button } from 'ui/Button/Button.styled'

type Color = 'gray' | 'primary'

export interface ButtonWithArrowProps extends Omit<ButtonProps, 'color'> {
  color: Color
}

const getColorStyles = (color: Color) => {
  if (color === 'gray') {
    return css`
      background: #f4f5f7;
      font-family: 'Stolzl';
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--color-primary);

      &:hover {
        color: var(--color-primary);
        background: #f4f5f7;
      }

      svg {
        stroke: var(--color-primary);
      }
    `
  }

  return css`
    color: #fff;

    svg {
      stroke: #fff;
    }
  `
}

export const ButtonWithArrow = styled(({ color, ...props }: ButtonWithArrowProps) => (
  <Button {...props} />
))`
  width: auto;
  height: 40px;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 16px;
  line-height: 22px;

  ${({ color }) => getColorStyles(color)}
`
