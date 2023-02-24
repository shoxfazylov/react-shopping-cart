import styled from '@emotion/styled'

import { media } from 'styled/media'
import { Box as BoxCommon } from 'styled/components'

import { Button } from 'ui/Button/Button.styled'

const media500 = media.createMedia(500)

export const Box = styled(BoxCommon)`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

export const Top = styled.div`
  padding: 20px 0;
  text-align: center;
`

export const Content = styled.div`
  padding: 30px 50px;
  border-top: 1px solid #e3e3e8;
  border-bottom: 1px solid #e3e3e8;

  ${media500} {
    padding: 30px 20px;
  }
`

export const Form = styled.form`
  ${Button} {
    margin-top: 20px;
  }
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  p,
  a {
    font-size: 18px;
  }

  a {
    margin-left: 5px;
    font-weight: 500;
  }
`
