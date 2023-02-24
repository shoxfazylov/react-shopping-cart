import { PropsWithChildren } from 'react'

import * as S from './Cancel.styled'

import CrossIcon from 'public/icons/cross-2.svg'

interface CancelButtonProps {
  onClick: () => void
}

export const CancelButton = ({ children, onClick }: PropsWithChildren<CancelButtonProps>) => {
  return (
    <S.CancelButton flexible={Boolean(children)} onClick={onClick}>
      <CrossIcon />
      <span>{children}</span>
    </S.CancelButton>
  )
}
