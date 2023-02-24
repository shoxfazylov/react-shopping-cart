import styled from '@emotion/styled'

import { media } from 'styled/media'

import { TextField } from 'ui/TextField/TextField.styled'

export const SearchRow = styled.div`
  width: 350px;
  margin-bottom: 15px;

  ${TextField} {
    .input-adornment {
      svg {
        fill: #92979e;
      }
    }
  }

  ${media.tablet} {
    width: 100%;
    margin-bottom: 20px;
  }
`
