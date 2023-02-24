import styled from '@emotion/styled'

import { media } from 'styled/media'

import { Box, Content as BoxContent } from 'common/Box/Box.styled'
import { RequisitesCard } from 'components/RequisitesCard/RequisitesCard.styled'
import { RequisitesList } from 'components/RequisitesList/RequisitesList.styled'
import { Button } from 'ui/Button/Button.styled'

const media660 = media.createMedia(660)
const media550 = media.createMedia(550)

export const OrderProducts = styled.div`
  ${media.tablet} {
    ${Box} {
      background: transparent;
      box-shadow: none;
      padding-top: 0;

      & > h4 {
        display: none;
      }
    }
  }
`

export const Requisites = styled.div`
  ${RequisitesList} {
    grid-template-columns: 1fr;
  }

  ${BoxContent} {
    & > ${Button} {
      width: 192.48px;
      margin-top: 20px;
    }
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

export const Accounting = styled.div`
  ${media660} {
    ${Box} {
      background: transparent;
      box-shadow: none;
      padding-top: 0;

      & > h4 {
        display: none;
      }
    }
  }
`

export const OrderActionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #dedee2;

  ${media.tablet} {
    background: #fff;
    border-top: none;
    margin-top: 10px;
  }
`

export const Refunds = styled.div`
  ${media.tablet} {
    ${Box} {
      background: transparent;
      box-shadow: none;
      padding-top: 0;

      & > h4 {
        display: none;
      }
    }
  }
`
