import { FC, PropsWithChildren } from 'react'

import { Header, Footer } from 'components/layouts'

import * as S from './Page.styled'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.PageLayout>
      <Header />

      <S.Wrapper as="main">
        <S.Content>{children}</S.Content>
      </S.Wrapper>

      <Footer />
    </S.PageLayout>
  )
}
