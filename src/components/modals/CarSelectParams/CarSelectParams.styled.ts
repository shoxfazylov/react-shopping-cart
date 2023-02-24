import styled from 'styled-components'

import { Modal } from 'ui'
import { media } from 'styled/media'

import { Select } from 'ui/Select/Select.styled'
import { Button } from 'ui/Button/Button.styled'
import { Skeleton } from 'ui/Skeleton/Skeleton.styled'

export const CarSelectParamsModal = styled(Modal)``

export const Form = styled.form`
  display: grid;
  gap: 20px;

  ${Select}:not(:last-of-type) {
    margin-bottom: 20px;
  }

  /* & > p {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 18px;
    color: #7a7680;
    text-align: center;
    white-space: normal;
  } */

  ${Button} {
    margin-top: 20px;
  }
`

export const SkeletonGrid = styled.div`
  width: 100%;

  ${Skeleton} > span {
    display: grid;
    grid-gap: 20px;
  }
`
