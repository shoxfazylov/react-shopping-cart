import NextLink, { LinkProps } from 'next/link'

import * as S from './Link.styled'

export const Link = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  return (
    <NextLink {...props} passHref>
      <S.Link>{children}</S.Link>
    </NextLink>
  )
}
