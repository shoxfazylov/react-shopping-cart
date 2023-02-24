import styled from '@emotion/styled'

import { RadioGroup, Radio } from 'ui/RadioGroup/RadioGroup.styled'

export const ChatTypeFilter = styled.div`
  display: flex;
  justify-content: flex-start;

  ${RadioGroup} {
    grid-gap: 0;
    padding: 4px;
    margin-bottom: 10px;
    background: #ffffff;
    box-shadow: 0px 2px 5px rgba(38, 34, 45, 0.1);
    border-radius: 6px;

    ${Radio} {
      display: none;

      &.Mui-checked + span {
        background: var(--color-primary);
        color: #fff;
      }

      & + span {
        padding: 11px 20px 9px;
        border-radius: 6px;
        transition: 0.3s;
      }
    }
  }
`
