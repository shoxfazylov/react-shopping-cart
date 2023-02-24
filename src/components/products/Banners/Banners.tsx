import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ButtonWithArrow } from 'common/buttons'

import * as S from './Banners.styled'

import oilsImg from 'public/img/banners/oils.png'
import wheelImg from 'public/img/banners/wheel.png'
import brakersImg from 'public/img/banners/brakers.png'

export const ProductsBanners = () => {
  const banners = [
    {
      title: ['Motor oil', 'Genesis'],
      buttonText: 'Visit',
      link: '/',
      bg: oilsImg
    },
    {
      title: ['Winter tires', 'cheaper'],
      buttonText: 'Select',
      link: '/',
      bg: wheelImg
    },
    {
      title: ['Spare parts for', 'maintenance'],
      buttonText: 'View',
      link: '/',
      bg: brakersImg
    },
    {
      title: ['Spare parts for', 'maintenance'],
      buttonText: 'View',
      link: '/',
      bg: brakersImg
    }
  ]

  const bannersItems = banners.map(({ title, buttonText, link, bg }) => {
    return (
      <SwiperSlide key={title.join('')}>
        <S.Banner style={{ backgroundImage: `url(${bg.src})` }}>
          <Typography variant="h2" component="h4">
            {title.map((text) => (
              <span key={text}>{text}</span>
            ))}
          </Typography>

          <Link href={link} passHref>
            <ButtonWithArrow LinkComponent="a">
              <span>{buttonText}</span>
            </ButtonWithArrow>
          </Link>
        </S.Banner>
      </SwiperSlide>
    )
  })

  return (
    <S.ProductsBanners>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
      >
        {bannersItems}
      </Swiper>
    </S.ProductsBanners>
  )
}
