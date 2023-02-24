import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

const media900 = media.createMedia(900)
const media500 = media.createMedia(500)

export const StepperBox = styled(Box)`
  padding: 40px 40px 39px 70px;

  ${media.laptop} {
    padding: 20px 20px 20px 30px;
  }

  ${media500} {
    padding: 20px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 407px 1fr;
  grid-gap: 20px;
  align-items: flex-start;

  ${media.laptop} {
    grid-template-columns: auto 1fr;
  }

  ${media900} {
    grid-template-columns: 100%;
  }
`
