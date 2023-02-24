import * as S from './Delete.styled'

import TrashIcon from 'public/icons/trash.svg'

interface DeleteButtonProps {
  onClick: () => void
}

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <S.DeleteButton variant="text" onClick={onClick}>
      <TrashIcon />
    </S.DeleteButton>
  )
}
