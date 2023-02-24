import styled from '@emotion/styled'

import { Button } from 'ui'

import { ButtonContent } from 'ui/Button/Button.styled'

export const EditButton = styled(Button)`
  width: 30px;
  padding: 0;

  ${ButtonContent} {
    height: 30px;
  }

  svg {
    transition: 0.3s;
  }

  &:hover {
    svg path {
      stroke: var(--color-primary);
    }
  }
`
