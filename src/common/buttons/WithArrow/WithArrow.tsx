import { ButtonWithArrowProps } from './WithArrow.styled'

import * as S from './WithArrow.styled'

import ArrowRightIcon from 'public/icons/arrows/right.svg'

export const ButtonWithArrow = ({ color = 'primary', ...props }: Partial<ButtonWithArrowProps>) => {
  return <S.ButtonWithArrow {...props} color={color} endIcon={<ArrowRightIcon />} />
}
