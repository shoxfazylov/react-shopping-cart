import styled from '@emotion/styled'

import { TextField } from 'ui/TextField/TextField.styled'

export const SparePartSearch = styled.div`
  max-width: 487px;
  width: 100%;
  margin-left: 17.63px;

  ${TextField} {
    .text-field-input-root {
      background: #f4f5f7;

      .text-field-input {
        padding: 15px 4px 11px 10px;
        font-size: 16px;
        color: #55556d;

        &::placeholder {
          color: #55556d;
        }
      }
    }
  }
`
