import Link from 'next/link'
import Typography from '@mui/material/Typography'

import { ROUTE_NAMES } from 'core'

import * as S from './CategoriesGrid.styled'

import forSuppliersBg from 'public/img/for-suppliers-bg.png'
import UserWithChartIcon from 'public/icons/user-with-chart.svg'
import ArrowRightIcon from 'public/icons/arrows/long-right.svg'

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

export const ProductsCategoriesGrid = () => {
  const categories = [
    {
      title: 'Original spare parts',
      amount: 234,
      link: '/',
      icon: <BrakersIcon />
    },
    {
      title: 'Non-original spare parts',
      amount: 55,
      link: '/',
      icon: <EngineIcon />
    },
    {
      title: 'Spare parts GM',
      amount: 66,
      link: '/',
      icon: <CarGarageIcon />
    },
    {
      title: 'Body parts',
      amount: 24,
      link: '/',
      icon: <FrontDoorIcon />
    },
    {
      title: 'Spare parts for maintenance',
      amount: 730,
      link: '/',
      icon: <SafetyBeltIcon />
    },
    {
      title: 'Auto glass',
      amount: 730,
      link: '/',
      icon: <GlassWasherIcon />
    },
    {
      title: 'Car oils',
      amount: 730,
      link: '/',
      icon: <CanisterIcon />
    },
    {
      title: 'Autochemistry',
      amount: 730,
      link: '/',
      icon: <CanisterIcon />
    },
    {
      title: 'Wheels',
      amount: 730,
      link: '/',
      icon: <WheelIcon />
    },
    {
      title: 'Accumulator',
      amount: 730,
      link: '/',
      icon: <AccumulatorIcon />
    },
    {
      title: 'Autolamps',
      amount: 730,
      link: '/',
      icon: <ShortLightIcon />
    }
  ]

  const categoriesItems = categories.map(({ title, amount, link, icon }) => {
    return (
      <S.SectionItem key={title}>
        <Link href={link} passHref>
          <a>
            <S.Icon>{icon}</S.Icon>

            <S.Right>
              <Typography variant="h4">{title}</Typography>
              <S.Amount>{amount} products</S.Amount>
            </S.Right>
          </a>
        </Link>
      </S.SectionItem>
    )
  })

  return (
    <S.ProductsCategoriesGrid>
      {categoriesItems}

      <S.ForSuppliersItem>
        <Link href="/" passHref>
          <a style={{ background: `url(${forSuppliersBg.src}) no-repeat center/cover` }}>
            <S.Icon>
              <UserWithChartIcon />
            </S.Icon>

            <S.Right>
              <Typography variant="h4">Suppliers</Typography>

              <S.ForSuppliersItemArrow>
                <ArrowRightIcon />
              </S.ForSuppliersItemArrow>
            </S.Right>
          </a>
        </Link>
      </S.ForSuppliersItem>
    </S.ProductsCategoriesGrid>
  )
}
