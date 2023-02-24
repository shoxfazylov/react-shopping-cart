import styled from '@emotion/styled'

import { media } from 'styled/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;

  ${media.createMedia(666)} {
    padding: 0 15px;
  }
`
