import styled from '@emotion/styled'

import { media } from 'styled/media'
import { Wrapper } from 'styled/components'

export { Wrapper }

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${Wrapper} {
    flex-grow: 1;
  }

  footer {
    margin-top: auto;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 30px;
  padding-bottom: 60px;

  ${media.laptop} {
    padding-bottom: 40px;
  }
`
