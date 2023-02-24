import styled from '@emotion/styled'
import MuiTextarea from '@mui/material/TextareaAutosize'

import { scrollStyles } from 'styled/scroll'

export const Textarea = styled(MuiTextarea)`
  width: 100%;
  min-height: 200px;
  padding: 13px 20px;
  border-radius: 6px;
  font-family: 'TTCommons';
  font-size: 18px;
  line-height: 22px;
  border: 1px solid #dedee2;
  color: var(--color-black);
  box-sizing: border-box;
  resize: none;
  overflow-y: auto !important;

  ${scrollStyles()}

  &::placeholder {
    color: #55556d;
  }

  &:focus {
    outline: none;
  }
`
