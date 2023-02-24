import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

import { TextField } from 'ui/TextField/TextField.styled'
import { SelectFormControl } from 'ui/Select/Select.styled'
import { RadioGroup, RadioGroupFormControlLabel } from 'ui/RadioGroup/RadioGroup.styled'

const media900 = media.createMedia(900)
const media500 = media.createMedia(500)

export const StepBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 539px;

  h2,
  h4 {
    white-space: normal;
  }

  ${media.laptop} {
    min-height: 500px;
  }

  ${media900} {
    min-height: auto;

    h4 {
      font-size: 18px;
      line-height: 22px;
    }
  }

  ${media500} {
    h4 {
      font-size: 16px;
    }
  }
`

export const StepTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px 0;

  h2 {
    font-family: 'TTCommons';
    line-height: 30px;
  }

  span {
    color: #7a7680;
  }

  ${media.laptop} {
    padding: 20px 30px;
  }

  ${media500} {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 30px 20px 20px;

    h2 {
      margin-top: 5px;
      font-size: 18px;
      line-height: 22px;
    }
  }
`

export const RadioGroupRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  ${RadioGroup} {
    margin-top: 10px;
  }

  ${media500} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`

export const RadioGroupColumn = styled.div`
  margin-top: 20px;

  ${RadioGroup} {
    flex-direction: column;
  }

  ${RadioGroupFormControlLabel} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  ${media500} {
    margin-top: 15px;
  }
`

export const StepFields = styled.div`
  margin-top: 20px;
  padding: 0 60px 30px;
  box-sizing: border-box;

  ${TextField}:not(:last-child), ${RadioGroup}:not(:last-child), ${SelectFormControl}:not(:last-child) {
    margin-bottom: 20px;
  }

  ${media.laptop} {
    margin-top: 0;
    padding: 0 30px 20px;
  }

  ${media500} {
    padding: 0 20px 20px;
  }
`
