import styled from '@emotion/styled'

import { media } from 'styled/media'
import { Wrapper } from 'styled/components'

import { SparePartSearch } from '../SparePartSearch/SparePartSearch.styled'
import { ShoppingCartLink } from '../ShoppingCartLink/ShoppingCartLink.styled'

const media666 = media.createMedia(666)

export const HeaderBottom = styled.div`
  display: flex;
  padding: 13px 0;
`

export const BottomWrapper = styled(Wrapper)`
  flex-direction: row;
  align-items: center;
  height: 44px;

  ${SparePartSearch} {
    display: none;
    max-width: 100%;
    margin-left: 10px;
  }

  ${media666} {
    ${SparePartSearch} {
      display: block;
    }

    ${ShoppingCartLink} {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  height: 100%;
  margin-left: 20px;

  ul {
    display: flex;
    height: 100%;
  }

  ${media666} {
    display: none;
  }
`

export const NavItem = styled.li`
  a {
    height: 100%;
    padding: 14px 15px 10px;
    border-radius: 8px;
    transition: 0.3s;
    box-sizing: border-box;

    &:hover {
      background: #f4f5f7;
    }
  }

  ${media.createMedia(1258)} {
    &:nth-child(6) {
      display: none;
    }
  }

  ${media.createMedia(1135)} {
    &:nth-child(5) {
      display: none;
    }
  }

  ${media.createMedia(1040)} {
    &:nth-child(4) {
      display: none;
    }
  }

  ${media.createMedia(836)} {
    &:nth-child(3) {
      display: none;
    }
  }
`
