import { useRef } from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { SlideNav } from 'common'

import * as S from './MainSlider.styled'

import productImg from 'public/img/main-slider/product.png'

import SliderMaskBg from 'public/img/main-slider/slider-mask.svg'
import SliderMaskTabletBg from 'public/img/main-slider/slider-mask-tablet.svg'
import SliderMaskMobileBg from 'public/img/main-slider/slider-mask-mobile.svg'

export const MainSlider = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const slide = (
    <SwiperSlide>
      <S.Slide>
        <S.SlideLeft>
          <Typography variant="h1">
              Lorem ipsum dolor sit amet
            <S.Discount>15%</S.Discount>
          </Typography>

          <Typography variant="h4">Donec hendrerit libero a lacus hendrerit malesuada.</Typography>
        </S.SlideLeft>

        <S.SlideImg>
          <Image src={productImg} priority quality={100} alt="product" />
        </S.SlideImg>

        <S.BackgroundDesk>
          <SliderMaskBg />
        </S.BackgroundDesk>

        <S.BackgroundTablet>
          <SliderMaskTabletBg />
        </S.BackgroundTablet>

        <S.BackgroundMobile>
          <SliderMaskMobileBg />
        </S.BackgroundMobile>
      </S.Slide>
    </SwiperSlide>
  )

  return (
    <S.MainSlider>
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        pagination
        slidesPerView={1}
        spaceBetween={20}
        onInit={({ params, navigation }) => {
          // @ts-ignore
          params.navigation.prevEl = prevRef.current
          // @ts-ignore
          params.navigation.nextEl = nextRef.current
          navigation.init()
          navigation.update()
        }}
      >
        {slide}
        {slide}
        {slide}

        <SlideNav prevRef={prevRef} nextRef={nextRef} />
      </Swiper>
    </S.MainSlider>
  )
}
