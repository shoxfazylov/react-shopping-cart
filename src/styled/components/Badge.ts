import styled from '@emotion/styled'
import { css } from '@emotion/react'

type Color = 'green' | 'orange' | 'primary' | 'blue' | 'cyan' | 'red' | 'gray'

interface BadgeProps {
  color: Color
  transparent?: boolean
}

const getTransparentStyles = (color: Color) => {
  switch (color) {
    case 'green':
      return css`
        font-weight: 500;
        color: var(--color-green-200);
        background: rgba(56, 168, 101, 0.1);
      `
    case 'orange':
      return css`
        font-weight: 500;
        color: var(--color-orange);
        background: rgba(251, 96, 25, 0.1);
      `
    case 'primary':
      return css`
        font-weight: 500;
        color: #6238a8;
        background: rgba(98, 56, 168, 0.1);
      `
    case 'blue':
      return css`
        font-weight: 500;
        color: #3768c7;
        background: rgba(55, 104, 199, 0.1);
      `
    case 'cyan':
      return css`
        font-weight: 500;
        color: #129e85;
        background: rgba(18, 158, 133, 0.1);
      `
    case 'red':
      return css`
        font-weight: 500;
        color: var(--color-red);
        background: rgba(221, 5, 5, 0.1);
      `
    case 'gray':
      return css`
        font-weight: 500;
        color: #8f909c;
        background: rgba(143, 144, 156, 0.1);
      `
  }
}

const getColor = (color: Color) => {
  switch (color) {
    case 'green':
      return 'var(--color-green-200)'
    case 'orange':
      return 'var(--color-orange)'
    case 'primary':
      return 'var(--color-primary)'
    case 'blue':
      return '#268AE1'
    case 'cyan':
      return '#0FC4CF'
    case 'red':
      return 'var(--color-red)'
    case 'gray':
      return '#8F909C'
  }
}

export const Badge = styled.span<BadgeProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px 2px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 6px;
  background: ${({ color }) => getColor(color)};
  color: #fff;

  ${({ transparent, color }) => transparent && getTransparentStyles(color)}
`
