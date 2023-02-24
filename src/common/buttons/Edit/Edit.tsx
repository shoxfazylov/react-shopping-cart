import * as S from './Edit.styled'

import PenIcon from 'public/icons/pen.svg'

interface EditButtonProps {
  onClick: () => void
}

export const EditButton = (props: EditButtonProps) => {
  return (
    <S.EditButton variant="text" {...props}>
      <PenIcon />
    </S.EditButton>
  )
}
