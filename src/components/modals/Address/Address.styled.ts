import styled from '@emotion/styled'

import { media } from 'styled/media'

import { Modal } from 'ui'

import { TextField } from 'ui/TextField/TextField.styled'
import { Button } from 'ui/Button/Button.styled'

export const AddressModal = styled(Modal)``

export const Form = styled.form`
  & > ${TextField}:not(:last-child) {
    margin-bottom: 20px;
  }

  ${Button} {
    margin-top: 20px;
  }
`

export const HouseRow = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 170px;
  grid-gap: 10px;

  ${media.mobile} {
    grid-template-columns: minmax(70px, 1fr) minmax(90px, 1fr) 2fr;
  }
`
