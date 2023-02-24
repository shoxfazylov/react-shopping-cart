import styled from '@emotion/styled'
import { css } from '@emotion/react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type StyledVariants = 'transparent'

type Color = 'gray'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  loading?: boolean
  styled?: 'transparent'
  color?: 'gray'
}

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
`

const getStyledStyles = (variant: StyledVariants) => {
  switch (variant) {
    case 'transparent':
      return css`
        font-size: 16px;
        color: var(--color-primary);
        background: rgba(107, 89, 204, 0.1);

        &.button-text {
          background: rgba(107, 89, 204, 0.1);
        }

        &:hover {
          background: rgba(107, 89, 204, 0.1);
        }
      `
  }
}

const getColorStyles = (color: Color) => {
  switch (color) {
    case 'gray':
      return css`
        &.button-outlined {
          height: 40px;
          padding: 0 15px;
          background: #fff;
          border: 1px solid #c5c3c8;
          border-radius: 6px;
          font-size: 16px;
          color: #3d3d4b;

          ${ButtonContent} {
            margin-top: 3px;
          }
        }
      `
  }
}

export const Button = styled(({ styled, color, ...props }: ButtonProps) => (
  <MuiButton {...props} />
))`
  padding: 0 20px;
  min-width: auto;
  height: 48px;
  background: var(--color-primary);
  border-radius: 6px;
  box-shadow: none;
  font-family: 'TTCommons';
  font-size: 18px;
  line-height: 22px;
  text-transform: unset;

  &:hover {
    background: var(--color-primary);
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
  }

  &.button-outlined {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background: #fff;
  }

  .button-start-icon {
    margin-left: 0;
    margin-right: 10px;
  }

  .button-end-icon {
    margin-right: 0;
    margin-left: 10px;
  }

  &.button-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    height: auto;
    background: transparent;
    color: var(--color-black);
  }

  .circular-progress {
    color: #fff;
  }

  ${({ styled }) => styled && getStyledStyles(styled)}
  ${({ color }) => color && getColorStyles(color)}
`
