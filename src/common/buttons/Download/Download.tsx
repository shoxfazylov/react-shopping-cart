import * as S from './Download.styled'

import DownloadIcon from 'public/icons/download-box-2.svg'

interface DownloadButtonProps {
  onClick: () => void
}

export const DownloadButton = ({ onClick }: DownloadButtonProps) => {
  return (
    <S.DownloadButton variant="outlined" startIcon={<DownloadIcon />} onClick={onClick}>
      Скачать
    </S.DownloadButton>
  )
}
