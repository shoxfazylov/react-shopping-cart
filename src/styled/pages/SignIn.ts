import styled from '@emotion/styled'

import { Box as BoxCommon } from 'styled/components'

export const Box = styled(BoxCommon)`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

export const Top = styled.div`
  padding: 20px 0;
  text-align: center;
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
