import styled from '@emotion/styled'

import { Modal } from 'ui'
import { Select } from 'ui/Select/Select.styled'

export const ChangeOrderStatusModal = styled(Modal)``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${Select} {
    width: 100%;
  }
`
