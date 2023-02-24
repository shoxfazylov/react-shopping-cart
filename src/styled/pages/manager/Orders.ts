import styled from '@emotion/styled'

import { media } from 'styled/media'

import { OrdersTable } from 'components/tables/Orders/Orders.styled'
import { Box, Content as BoxContent } from 'common/Box/Box.styled'
import { TabsBox } from 'ui/Tabs/Tabs.styled'
import { TableHead, TableRow } from 'ui/Table/Table.styled'

const media900 = media.createMedia(900)

export { TabsBox }

export const ManagerOrdersPage = styled.div`
  ${TabsBox} {
    margin-bottom: 0;
  }

  ${Box}, ${BoxContent} {
    padding-top: 0;
  }

  ${Box} {
    border-radius: 0;
  }

  ${OrdersTable} {
    ${TableHead} {
      ${TableRow} {
        grid-template-rows: 60px;
      }
    }
  }

  ${media900} {
    ${OrdersTable} {
      margin-top: 20px;
    }

    ${Box} {
      background: transparent;
      box-shadow: none;
    }
  }
`
