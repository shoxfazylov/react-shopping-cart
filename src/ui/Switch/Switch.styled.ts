import styled from '@emotion/styled'

import MuiSwitch from '@mui/material/Switch'

export const Switch = styled(MuiSwitch)`
  width: 40px;
  height: 22px;
  padding: 0;

  .switch {
    &-base {
      padding: 3px;
      background-color: transparent;
      transition: 0.3s;

      &.switch-checked {
        transform: translateX(18px);

        & + .switch-track {
          background: var(--color-blue);
          opacity: 1;
        }
      }
    }

    &-thumb {
      width: 16px;
      height: 16px;
      background: #fff;
      box-shadow: none;
    }

    &-track {
      background: #eaeafd;
      border-radius: 18px;
      opacity: 1;
    }
  }
`
