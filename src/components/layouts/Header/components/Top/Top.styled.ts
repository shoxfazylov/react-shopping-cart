import styled from '@emotion/styled'

import { media } from 'styled/media'
import { Wrapper } from 'styled/components'

import { SparePartSearch } from '../SparePartSearch/SparePartSearch.styled'
import { Phone } from '../Phone/Phone.styled'
import { UserEntry } from '../UserEntry/UserEntry.styled'
import { LocationChoose, CurrentLocation } from 'components/LocationChoose/LocationChoose.styled'

const media1270 = media.createMedia(1270)

const media666 = media.createMedia(666)

export const HeaderTop = styled.div`
  padding: 13px 0;
  border-bottom: 1px solid #e3e3e8;

  ${media666} {
    padding: 0;
    height: 60px;
  }
`
export const TopWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media1270} {
    ${SparePartSearch} {
      max-width: 100%;
      margin-left: 15px;
    }
  }

  ${media666} {
    height: 100%;

    ${SparePartSearch} {
      display: none;
    }
  }
`

export const Logo = styled.div`
  position: relative;
  flex-shrink: 0;
  z-index: 1200;
`

export const LogoImg = styled.div`
  width: 148px;
  height: 40px;

  ${media1270} {
    width: 111px;
    height: 30.77px;
  }

  ${media666} {
    display: none;
  }
`

export const LogoImgMobile = styled.div`
  display: none;
  width: 85.5px;
  height: 23px;

  ${media666} {
    display: block;
  }
`

export const LogoGear = styled.span`
  position: absolute;
  top: 0;
  left: -1px;
  width: 40px;
  height: 40px;
  animation: rotating 8s linear infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${media1270} {
    width: 32px;
    height: 32px;
    top: -1px;
  }

  ${media666} {
    width: 23.18px;
    height: 23.18px;
    top: 0;
  }
`

export const LogoGearImg = styled.div`
  max-width: 100%;

  ${media666} {
    display: none;
  }
`

export const LogoGearImgMobile = styled.div`
  display: none;
  max-width: 100%;

  ${media666} {
    display: block;
  }
`

export const Notifications = styled.div`
  height: 24px;
`

export const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 0;
  margin-left: 20px;

  ${LocationChoose}, ${Phone} {
    margin-right: 10px;
  }

  ${media1270} {
    margin-left: 30px;

    ${UserEntry} {
      display: none;
    }

    ${LocationChoose}, ${Phone}, ${Notifications} {
      margin-right: 30px;
    }

    ${CurrentLocation}, ${Phone} {
      span {
        display: none;
      }
    }
  }

  ${media666} {
    align-items: flex-end;
    justify-content: flex-start;
    flex-grow: 0;
    margin-left: auto;

    ${LocationChoose}, ${Notifications} {
      margin-right: 20px;
    }

    ${Phone} {
      display: none;
    }
  }
`

export const UserLink = styled.a`
  display: none;

  ${media1270} {
    display: block;
  }

  ${media666} {
    height: 24px;
  }
`

export const ShoppingCartItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px 2px 7px;
  background: #fb6019;
  border-radius: 25px;
  font-size: 14px;
  color: #fff;
`

export const ShoppingCartLinkMobile = styled.a`
  position: relative;
  display: none;
  align-items: flex-end;
  margin-right: 30px;

  ${ShoppingCartItemsCount} {
    position: absolute;
    top: -6px;
    right: -7px;
    display: flex;
    align-items: flex-end;
    min-width: 16px;
    min-height: 16px;
    padding: 0 4px;
    font-size: 12px;
    box-sizing: border-box;
  }

  ${media666} {
    display: flex;
  }
`

export const UserEntryMobile = styled.div`
  display: none;

  ${media1270} {
    display: block;
  }
`
