import styled from '@emotion/styled'
import MuiRadioGroup from '@mui/material/RadioGroup'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import MuiRadio from '@mui/material/Radio'

export const RadioGroup = styled(MuiRadioGroup)`
  flex-direction: row;
  grid-gap: 10px 30px;
`

export const RadioGroupFormControlLabel = styled(MuiFormControlLabel)`
  margin: 0;
  font-weight: 500;

  & > span:last-child {
    padding-top: 3px;
    white-space: normal;
  }
`

export const Radio = styled(MuiRadio)`
  padding: 0;
  margin-right: 10px;

  &:hover {
    background: #fff;
  }
`
