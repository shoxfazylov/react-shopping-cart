import Head from 'next/head'
import {MainSlider} from "components/MainSlider/MainSlider";
import {
  ProductsCategoriesGrid,
  ProductsOilsSection,
  ProductsBanners,
  ProductsCarousel
} from 'components/products'
import { Header, Footer } from 'components/layouts'


import * as S from 'styled/pages/Main'

const MainPage = () => {

  const products = [
    {
      id: 1,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 l. Motor oil.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 2,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 l. Motor oil.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 3,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 l. Motor oil.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 4,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 l. Motor oil.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    },
    {
      id: 5,
      name: 'Mobil SUPER 3000 X1 5W-40, 1 l. Motor oil.',
      price: { new: 2334, old: 2864 },
      rating: 4,
      commentsNumber: 51,
      productCode: 153789,
      img: '/'
    }
  ]

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>

      <Header />

      <S.Main>
        <S.Top>
          <S.Wrapper>
            <MainSlider />
            <ProductsCategoriesGrid />
          </S.Wrapper>
        </S.Top>

        <S.Sections>
          <S.Wrapper>
            <ProductsOilsSection />

            <ProductsBanners />

            <ProductsCarousel title="Recommended" products={products} />

            <ProductsCarousel title="Frequently Sold" products={products} />
          </S.Wrapper>
        </S.Sections>
      </S.Main>

      <Footer />
    </>
  )
}

export default MainPage
