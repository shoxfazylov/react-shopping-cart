import { ButtonProps } from 'ui/Button/Button'

import * as S from './Add.styled'

import PlusIcon from 'public/icons/plus-2.svg'

export const AddButton = (props: ButtonProps) => {
  return <S.AddButton startIcon={<PlusIcon />} {...props} />
}
