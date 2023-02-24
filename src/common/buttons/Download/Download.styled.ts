import styled from '@emotion/styled'

import { Button } from 'ui'

export const DownloadButton = styled(Button)`
  width: 100%;
  height: 36px;
  padding: 0;

  &.button-outlined {
    border: 1px solid #dedee2;
    color: var(--color-black);
    font-size: 14px;
    font-weight: 400;
  }

  span:last-child {
    margin-top: 4px;
  }
`
