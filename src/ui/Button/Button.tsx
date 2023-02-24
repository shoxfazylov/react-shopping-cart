import { forwardRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { ButtonProps as MuiButtonProps } from '@mui/material/Button'

import * as S from './Button.styled'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  loading?: boolean
  styled?: 'transparent'
  color?: 'gray'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { loading, children, startAdornment, endAdornment, startIcon, endIcon, styled, ...props },
    ref
  ) => {
    return (
      <S.Button
        ref={ref}
        {...props}
        startIcon={!loading && startIcon}
        endIcon={!loading && endIcon}
        styled={styled}
      >
        {!loading ? (
          <S.ButtonContent>{children}</S.ButtonContent>
        ) : (
          <CircularProgress size={30} thickness={4.5} />
        )}
      </S.Button>
    )
  }
)
