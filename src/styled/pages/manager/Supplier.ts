import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { media } from 'styled/media'

import { TabsBox } from 'ui/Tabs/Tabs.styled'
import { Box } from 'common/Box/Box.styled'
import { SupplierInfoForm } from 'components/forms/SupplierInfo/SupplierInfo.styled'
import { NoRequisites } from 'components/RequisitesList/RequisitesList.styled'
import { RequisitesCard } from 'components/RequisitesCard/RequisitesCard.styled'

const media900 = media.createMedia(900)
const media880 = media.createMedia(880)
const media730 = media.createMedia(730)
const media660 = media.createMedia(660)
const media550 = media.createMedia(550)

const boxWithoutHeadingStyles = css`
  ${Box} {
    box-shadow: none;
    background: transparent;
    padding-top: 0;

    & > h4 {
      display: none;
    }
  }
`

export { TabsBox }

export const ManagerSupplierPage = styled.div`
  ${SupplierInfoForm} {
    max-width: 800px;
  }

  ${NoRequisites} {
    padding-bottom: 26px;
  }

  ${media550} {
    ${RequisitesCard} {
      flex-direction: column;
      padding-bottom: 20px;

      label {
        flex-direction: row;

        span:first-child {
          margin-right: 10px;
        }
      }
    }
  }
`

export const Orders = styled.div`
  ${media900} {
    ${boxWithoutHeadingStyles}
  }
`

export const Receipts = styled.div`
  ${media730} {
    ${boxWithoutHeadingStyles}
  }
`

export const Stores = styled.div`
  ${media880} {
    ${boxWithoutHeadingStyles}
  }
`

export const Accounting = styled.div`
  ${media660} {
    ${boxWithoutHeadingStyles}
  }
`
