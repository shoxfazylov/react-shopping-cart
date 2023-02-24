import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProductCard } from 'components/products'
import { ButtonWithArrow } from 'common/buttons'

import * as S from './OilsSection.styled'

import oilsImg from 'public/img/banners/oils-big.png'

interface Price {
  new: number
  old: number
}

interface Product {
  id: number
  name: string
  price: Price
  rating: number
  commentsNumber: number
  productCode: number
  img: string
}

export const ProductsOilsSection = () => {
  const oils: Product[] = [
    {
      id: 1,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 2,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 3,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 4,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    }
  ]

  const oilsProductsCards = oils.map(
    ({ id, name, price, rating, commentsNumber, productCode, img }) => {
      return (
        <SwiperSlide key={id}>
          <ProductCard
            name={name}
            price={price}
            rating={rating}
            commentsNumber={commentsNumber}
            productCode={productCode}
            img={img}
            link="/"
          />
        </SwiperSlide>
      )
    }
  )

  return (
    <S.ProductsOilsSection>
      <S.Top>
        <Typography variant="h2">Motor oil</Typography>

        <Link href="/" passHref>
          <ButtonWithArrow LinkComponent="a" color="gray">
            All products
          </ButtonWithArrow>
        </Link>
      </S.Top>

      <S.Carousel>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          breakpoints={{ 1200: { slidesPerView: 4, spaceBetween: 20 } }}
        >
          <SwiperSlide>
            <Link href="/" passHref>
              <S.Banner style={{ backgroundImage: `url(${oilsImg.src})` }}>
                <Typography variant="h2" component="p">
                  Lorem ipsum  <br />
                  dolor sit amet <br />
                  consectetur adipiscing elit
                </Typography>
              </S.Banner>
            </Link>
          </SwiperSlide>

          {oilsProductsCards}
        </Swiper>
      </S.Carousel>
    </S.ProductsOilsSection>
  )
}
