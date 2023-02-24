import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { media } from 'styled/media'
import { Skeleton } from 'ui/Skeleton/Skeleton.styled'

const media1000 = media.createMedia(1000)

const gridStyles = css`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;

  ${media1000} {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export const SparePartWithDetailsPage = styled.div``

export const Content = styled.div`
  ${gridStyles}
`

export const SkeletonGrid = styled.div`
  ${Skeleton} > span {
    ${gridStyles}
  }
`
