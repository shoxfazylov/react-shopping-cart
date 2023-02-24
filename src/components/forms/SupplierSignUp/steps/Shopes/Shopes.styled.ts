import styled from '@emotion/styled'

import { media } from 'styled/media'

import { Button } from 'ui/Button/Button.styled'

const media500 = media.createMedia(500)

export const ShopesStep = styled.div``

export const ButtonsRow = styled.div`
  display: flex;
  margin-top: 20px;

  ${Button} {
    width: 200px;
    padding: 0;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  ${media500} {
    flex-direction: column;

    ${Button} {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`
