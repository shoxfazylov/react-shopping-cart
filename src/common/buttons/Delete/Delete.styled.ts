import styled from '@emotion/styled'

import { Button } from 'ui'

export const DeleteButton = styled(Button)`
  width: 30px;
  padding: 0;

  &.button-text {
    height: 30px;
  }

  svg {
    transition: 0.3s;
  }

  &:hover {
    svg {
      fill: var(--color-red);
    }
  }
`
