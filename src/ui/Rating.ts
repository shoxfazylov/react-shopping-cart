import styled from '@emotion/styled'
import MuiRating from '@mui/material/Rating'

export const Rating = styled(MuiRating)`
  display: flex;
  align-items: center;

  span:not(:last-child) {
    margin-right: 3px;
  }
`
