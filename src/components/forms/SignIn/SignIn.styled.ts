import styled from '@emotion/styled'

import { media } from 'styled/media'

import { Button } from 'ui/Button/Button.styled'
import { TextField } from 'ui/TextField/TextField.styled'
import { Tabs, Tab, TabsBox } from 'ui/Tabs/Tabs.styled'

const media500 = media.createMedia(500)

export const SignInForm = styled.form`
  padding: 30px 50px;
  border-top: 1px solid #e3e3e8;
  border-bottom: 1px solid #e3e3e8;

  ${TabsBox} {
    padding: 0;
    margin-bottom: 30px;
    box-shadow: none;
  }

  ${Tabs} {
    .tabs-flex-container {
      position: static;
    }
  }

  ${Tab} {
    width: 50%;

    &:not(:last-child) {
      margin-right: 0;
    }
  }

  ${TextField}:not(:last-of-type) {
    margin-bottom: 20px;
  }

  ${Button} {
    margin-top: 20px;
  }

  ${media500} {
    padding: 30px 20px;
  }
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
