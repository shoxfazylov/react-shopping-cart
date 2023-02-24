import styled from '@emotion/styled'

import { Skeleton } from 'ui/Skeleton/Skeleton.styled'

export const StoreForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 390px;
`

export const SkeletonGrid = styled.div`
  ${Skeleton} > span {
    display: grid;
    grid-gap: 20px;
  }
`
