import styled from '@emotion/styled'

import { TextField } from 'ui/TextField/TextField.styled'
import { Select } from 'ui/Select/Select.styled'
import { Textarea } from 'ui/Textarea/Textarea.styled'
import { Button } from 'ui/Button/Button.styled'
import { Skeleton } from 'ui/Skeleton/Skeleton.styled'

export const SupplierInfoForm = styled.div`
  p {
    margin-bottom: 10px;
    font-weight: 500;
  }

  ${TextField}, ${Select} {
    margin-bottom: 20px;
  }
`

export const ActionsRow = styled.div`
  display: flex;
  gap: 20px;

  ${Button}:first-of-type {
    width: 120px;
  }
`

export const ContactPersonForm = styled.form`
  ${Textarea} {
    min-height: 100px;
    height: auto !important;
  }
`

export const LegalPersonForm = styled.form`
  margin-top: 30px;
`

export const SkeletonGrid = styled.div`
  margin-bottom: 20px;

  ${Skeleton} > span {
    display: grid;
    grid-gap: 20px;
  }
`
