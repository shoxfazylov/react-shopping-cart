import styled from '@emotion/styled'

import { Modal } from 'ui'
import { media } from 'styled/media'

import { TextField } from 'ui/TextField/TextField.styled'
import { Button } from 'ui/Button/Button.styled'
import { ImagesDropzone, ImagePreviewList } from 'ui/ImagesDropzone/ImagesDropzone.styled'

export const AddStoreModal = styled(Modal)``

export const Form = styled.form`
  ${TextField}:not(:last-of-type) {
    margin-bottom: 20px;
  }

  & > p {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
    color: #7a7680;
    text-align: center;
    white-space: normal;
  }

  ${Button} {
    margin-top: 20px;
  }

  ${media.mobile} {
    ${ImagesDropzone} {
      gap: 10px;
    }

    ${ImagesDropzone}, ${ImagePreviewList} {
      flex-wrap: wrap;
    }
  }
`
