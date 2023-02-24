import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Autocomplete } from 'ui/Autocomplete/Autocomplete.styled'
export { TextField } from 'ui/TextField/TextField.styled'

export const MultipleAutocomplete = styled(Autocomplete)`
  margin-bottom: 20px;

  .input-adornment {
    svg {
      transform: rotate(90deg);
      transition: 0.3s;
    }
  }

  .autocomplete-focused .input-adornment {
    svg {
      transform: rotate(-90deg);
    }
  }
`
