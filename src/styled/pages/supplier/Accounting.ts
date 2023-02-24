import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

import { TabsBox } from 'ui/Tabs/Tabs.styled'
import { Table } from 'ui/Table/Table.styled'
import { OrdersAccountingTable } from 'components/tables/OrdersAccounting/OrdersAccounting.styled'

const media600 = media.createMedia(600)

export { Box }

export const SupplierAccountingPage = styled.div`
  ${TabsBox} {
    margin-bottom: 0;
  }

  ${OrdersAccountingTable} {
    ${Table} {
      padding-top: 17px;
    }
  }

  ${media600} {
    ${OrdersAccountingTable} {
      margin-top: 20px;
    }
  }
`
