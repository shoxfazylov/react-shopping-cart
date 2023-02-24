import styled from '@emotion/styled'

import { Button } from 'ui/Button/Button.styled'

export const CustomerPersonalInfoForm = styled.form`
  max-width: 800px;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }

  ${Button} {
    width: 187px;
    height: 44px;
    font-size: 16px;
  }
`
