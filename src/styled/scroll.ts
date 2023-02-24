import { css } from '@emotion/react'

type Color = 'gray' | 'primary'

const getColor = (color: Color) => {
  switch (color) {
    case 'gray':
      return 'var(--color-gray)'
    case 'primary':
      return 'var(--color-primary)'
  }
}

export const scrollStyles = (color: Color | undefined = 'primary') => css`
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${getColor(color)};
  }
`
