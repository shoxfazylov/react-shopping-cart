import { useState, useEffect } from 'react'
import Drawer from '@mui/material/Drawer'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {LocationChoose} from "../../../../LocationChoose/LocationChoose";
import { UserEntry, Phone, ShoppingCartLink } from '..'

import { NavItem } from '../../Header.types'

import * as S from './HamburgerMenu.styled'

interface HamburgerMenuProps {
  nav: NavItem[]
}

export const HamburgerMenu = ({ nav }: HamburgerMenuProps) => {
  const router = useRouter()

  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  const toggleMenuOpen = () => {
    setMenuOpen(isMenuOpen ? false : true)
  }

  const navItems = nav.map(({ label, link }) => {
    return (
      <li key={link}>
        <Link href={link} passHref>
          <S.MenuNavLink>{label}</S.MenuNavLink>
        </Link>
      </li>
    )
  })

  return (
    <S.HamburgerMenu>
      <S.HamburgerButton active={isMenuOpen} onClick={toggleMenuOpen}>
        <span />
        <span />
        <span />
      </S.HamburgerButton>

      <Drawer anchor="left" disablePortal open={isMenuOpen} onClose={toggleMenuOpen}>
        <S.Menu>
          <S.MenuTop>
            <UserEntry />
          </S.MenuTop>

          <S.MenuMiddle>
            <LocationChoose />
            <Phone />
            <ShoppingCartLink />
          </S.MenuMiddle>

          <S.MenuBottom>
            <S.MenuNavList>{navItems}</S.MenuNavList>
          </S.MenuBottom>
        </S.Menu>
      </Drawer>
    </S.HamburgerMenu>
  )
}
