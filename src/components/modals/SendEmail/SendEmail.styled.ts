import styled from '@emotion/styled'

import { Modal } from 'ui'

import { Button } from 'ui/Button/Button.styled'
import { TextField } from 'ui/TextField/TextField.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'

export const SendEmailModal = styled(Modal)``

export const Form = styled.form`
  ${TextField} {
    margin-bottom: 20px;
  }

  ${Textarea} {
    min-height: 100px;
    max-height: 300px;
    margin-bottom: 20px;
  }

  ${Button} {
    margin-top: 20px;
  }
`

export const Dropzone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: 1px dashed #dedee2;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  p {
    color: #3d3d4b;
    margin-top: 4px;
    margin-left: 10px;

    span {
      font-size: 14px;
    }
  }
`

export const Files = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
