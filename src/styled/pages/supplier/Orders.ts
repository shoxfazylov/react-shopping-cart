import styled from '@emotion/styled'

import { media } from 'styled/media'

import { DateRangePicker } from 'ui/DateRangePicker/DateRangePicker.styled'
import { TextField } from 'ui/TextField/TextField.styled'
import { Table } from 'ui/Table/Table.styled'
import { TabsBox } from 'ui/Tabs/Tabs.styled'
import { OrdersTable } from 'components/tables/Orders/Orders.styled'

const media900 = media.createMedia(900)

export const TopFilters = styled.div`
  display: flex;
  gap: 20px;

  ${TextField} {
    /* background: #fff; */

    /* .input-adornment {
      margin-top: -3px;

      svg {
        fill: #92979e;
      }
    } */
  }

  ${DateRangePicker} {
    height: 48px;
    padding: 13px 30px 13px 15px;
  }

  ${media.tablet} {
    flex-direction: column;
  }
`

export const OrderIdSearch = styled.div`
  width: 100%;
`

export const SupplierOrdersPage = styled.div`
  ${OrdersTable} {
    ${Table} {
      padding-top: 17px;
    }
  }

  ${TabsBox} {
    margin-top: 15px;
    margin-bottom: 0;
  }

  ${media900} {
    ${OrdersTable} {
      margin-top: 10px;

      ${Table} {
        padding-top: 0;
      }
    }
  }
`
