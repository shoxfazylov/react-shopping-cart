import { useRef } from 'react'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { ProductCard } from 'components/products'
import { SlideNav } from 'common'

import * as S from './Carousel.styled'

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

interface ProductsCarouselProps {
  title: string
  products: Product[]
}

export const ProductsCarousel = ({ title, products }: ProductsCarouselProps) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const productsCardsSlides = products.map((product) => {
    const { id, name, price, rating, commentsNumber, productCode, img } = product

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
  })

  return (
    <S.ProductsCarousel>
      <Typography variant="h2">{title}</Typography>

      <S.Carousel>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          modules={[Navigation]}
          onInit={({ params, navigation }) => {
            // @ts-ignore
            params.navigation.prevEl = prevRef.current
            // @ts-ignore
            params.navigation.nextEl = nextRef.current
            navigation.init()
            navigation.update()
          }}
        >
          {productsCardsSlides}

          <SlideNav prevRef={prevRef} nextRef={nextRef} />
        </Swiper>
      </S.Carousel>
    </S.ProductsCarousel>
  )
}
