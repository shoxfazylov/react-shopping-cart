import { useState, MouseEvent } from 'react'
import Popper from '@mui/material/Popper'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Image from 'next/image'

import { Backdrop } from 'ui'

import { ROUTE_NAMES } from 'core'

import * as S from './AllCategories.styled'

import GridIcon from 'public/icons/grid.svg'

import BrakersIcon from 'public/icons/brakers.svg'
import EngineIcon from 'public/icons/engine.svg'
import CarGarageIcon from 'public/icons/car-garage.svg'
import FrontDoorIcon from 'public/icons/front-door.svg'
import SafetyBeltIcon from 'public/icons/safety-belt.svg'
import GlassWasherIcon from 'public/icons/glass-washer.svg'
import CanisterIcon from 'public/icons/canister.svg'
import WheelIcon from 'public/icons/wheel.svg'
import AccumulatorIcon from 'public/icons/accumulator.svg'
import ShortLightIcon from 'public/icons/short-light.svg'
import oilsBannerImg from 'public/img/banners/oils-2.png'

export const AllCategories = () => {
  const [popperAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isPopperOpen = Boolean(popperAnchorEl)

  const categories = [
    { label: 'Original spare parts', link: '/', icon: <BrakersIcon />},
    { label: 'Non-original spare parts', link: '/', icon: <EngineIcon />},
    { label: 'Body parts', link: '/', icon: <FrontDoorIcon />},
    { label: 'Spare parts', link: '/', icon: <SafetyBeltIcon />},
    { label: 'Auto glass', link: '/', icon: <GlassWasherIcon /> },
    { label: 'Car oils', link: '/', icon: <CanisterIcon /> },
    { label: 'Autochemistry', link: '/', icon: <CanisterIcon /> },
    { label: 'Wheels', link: '/', icon: <WheelIcon /> },
    { label: 'Accumulator', link: '/', icon: <AccumulatorIcon />},
    { label: 'Autolamps', link: '/', icon: <ShortLightIcon /> }
  ]

  const togglePopper = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(popperAnchorEl ? null : e.currentTarget)
  }

  const closePopper = () => {
    setAnchorEl(null)
  }

  const categoriesItems = categories.map(({ label, link, icon }) => {
    return (
      <S.CategoryItem key={label}>
        <Link href={link} passHref>
          <S.CategoryLink>
            <S.CategoryItemIcon>{icon}</S.CategoryItemIcon>
            <Typography component="span">{label}</Typography>
          </S.CategoryLink>
        </Link>
      </S.CategoryItem>
    )
  })

  return (
    <S.AllCategories open={isPopperOpen}>
      <S.CategoriesButton open={isPopperOpen} onClick={togglePopper} startIcon={<GridIcon />}>
        All categories
      </S.CategoriesButton>

      <Backdrop
        open={isPopperOpen}
        onClick={() => {
          if (popperAnchorEl) {
            closePopper()
          }
        }}
      >
        <Popper
          open={isPopperOpen}
          anchorEl={popperAnchorEl}
          placement="bottom-start"
          disablePortal
        >
          <S.AllCategoriesContainer>
            <S.AllCategoriesBox>
              <S.Categories>{categoriesItems}</S.Categories>

              <S.OilsBanner>
                <Typography>
                  Car oils №1 <br /> from official <br /> dealers
                </Typography>
                <Image src={oilsBannerImg} alt="banner" layout="fill" quality={100} />
              </S.OilsBanner>
            </S.AllCategoriesBox>
          </S.AllCategoriesContainer>
        </Popper>
      </Backdrop>
    </S.AllCategories>
  )
}
