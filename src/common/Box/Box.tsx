import Typography from '@mui/material/Typography'

import * as S from './Box.styled'

interface BoxProps {
  title?: string
  children: React.ReactNode
  noPaddings?: boolean
}

export const Box = ({ title, noPaddings = false, children }: BoxProps) => {
  return (
    <S.Box noPaddings={!title && noPaddings}>
      {title ? <Typography variant="h4">{title}</Typography> : null}

      <S.Content noPaddings={noPaddings}>{children}</S.Content>
    </S.Box>
  )
}
