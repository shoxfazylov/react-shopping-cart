import styled from '@emotion/styled'

import { Button } from 'ui/Button/Button.styled'

import { TextField } from 'ui/TextField/TextField.styled'
import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'

export const SignUpForm = styled.form`
  ${RadioGroup} {
    justify-content: center;
    margin-bottom: 30px;
  }

  ${TextField}:not(:last-of-type) {
    margin-bottom: 20px;
  }

  ${Button} {
    margin-top: 20px;
  }
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
