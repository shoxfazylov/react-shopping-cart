import styled from '@emotion/styled'

import { Box } from 'styled/components'
import { media } from 'styled/media'

import { TabsBox, Tab } from 'ui/Tabs/Tabs.styled'
import { Button } from 'ui/Button/Button.styled'
import { PriceListDropzone } from 'components/PriceListDropzone/PriceListDropzone.styled'
import { TableBox } from 'components/tables/PriceLists/PriceLists.styled'

const media680 = media.createMedia(680)

export const ApiBox = styled(Box)`
  min-height: 455px;
  padding: 30px 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-sizing: border-box;

  p {
    white-space: normal;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export const PriceListUploadBox = styled(Box)`
  height: 455px;
  padding: 30px 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-sizing: border-box;
`

export const PriceListUploadContent = styled.div`
  max-width: 352px;
  width: 100%;

  p {
    white-space: normal;
  }

  p:nth-child(2) {
    margin-top: 5px;
    color: #55556d;
  }

  ${PriceListDropzone} {
    margin-top: 20px;
  }

  ${Button} {
    margin-top: 20px;
  }
`

export const SupplierPriceListsPage = styled.div`
  ${TabsBox} {
    margin-bottom: 0;
  }

  ${TableBox} {
    padding-top: 17px;
  }

  ${media680} {
    ${TableBox} {
      padding-top: 0;
      margin-top: 10px;
    }
  }

  ${media.mobile} {
    ${Tab} {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`
