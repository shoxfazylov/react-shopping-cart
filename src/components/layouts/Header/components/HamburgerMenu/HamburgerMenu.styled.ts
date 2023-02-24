import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { media } from 'styled/media'

import { UserEntry } from '../UserEntry/UserEntry.styled'
import { ShoppingCartLink } from '../ShoppingCartLink/ShoppingCartLink.styled'
import { CurrentLocation } from 'components/LocationChoose/LocationChoose.styled'

const media666 = media.createMedia(666)

interface HamburgerButtonProps {
  active: boolean
}

export const HamburgerMenu = styled.div`
  display: none;
  margin-right: 15px;

  ${media666} {
    display: block;
  }
`

export const HamburgerButton = styled.button<HamburgerButtonProps>`
  position: relative;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 18px;
    height: 2px;
    border-radius: 10px;
    background: var(--color-black);
    transition: 0.3s;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  ${({ active }) =>
    active &&
    css`
      span {
        &:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
      }
    `}
`

export const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
`

export const MenuTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 15px;

  ${media.mobile} {
    padding: 0 10px;

    ${UserEntry} {
      span {
        margin: 0 3px;
      }
    }
  }
`

export const MenuMiddle = styled.div`
  padding: 20px;
  border-top: 1px solid #e3e3e8;
  border-bottom: 1px solid #e3e3e8;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  ${CurrentLocation} {
    span {
      margin-left: 10px;
    }
  }

  ${ShoppingCartLink} {
    width: auto;
    padding-left: 0;
    padding-right: 0;
    background: transparent;
  }
`

export const MenuBottom = styled.div`
  padding: 10px 20px;
`

export const MenuNavList = styled.ul``

export const MenuNavLink = styled.a`
  padding: 10px 4px;
`
