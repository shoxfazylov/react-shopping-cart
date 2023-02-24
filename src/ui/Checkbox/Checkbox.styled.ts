import styled from '@emotion/styled'
import MuiCheckbox from '@mui/material/Checkbox'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

export const Checkbox = styled(MuiCheckbox)`
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid #dedee2;
  background: #ffffff;
  border-radius: 4px;
  transition: 0.3s;
  box-sizing: border-box;

  &:hover {
    background: #f4f5f7;
  }

  .MuiSvgIcon-root {
    display: none;
  }
`

export const FormControl = styled(MuiFormControlLabel)`
  display: flex;
  align-items: flex-end;
  margin: 0;

  span:last-child {
    margin-left: 10px;
  }
`
