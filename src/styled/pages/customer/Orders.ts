import styled from '@emotion/styled'

import { media } from 'styled/media'

import { AccountPageTitle } from 'components/AccountPageTitle/AccountPageTitle.styled'
import { OrderStatusSelect } from 'common/OrderStatusSelect/OrderStatusSelect.styled'
import { DateRangePicker } from 'ui/DateRangePicker/DateRangePicker.styled'
import { Select } from 'ui/Select/Select.styled'

const media860 = media.createMedia(860)
const media695 = media.createMedia(695)

export const CustomerOrdersPage = styled.div`
  ${media860} {
    ${AccountPageTitle} {
      flex-direction: column;
    }
  }
`

export const Filters = styled.div`
  display: flex;
  gap: 30px;

  ${media860} {
    margin-top: 15px;
  }

  ${media695} {
    flex-direction: column;
    gap: 15px;

    ${OrderStatusSelect}, ${DateRangePicker}, ${Select} {
      width: 100%;
    }
  }
`

export const Filter = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-right: 15px;
    color: #55556d;
  }

  ${media695} {
    & > span {
      min-width: 45px;
    }
  }
`
