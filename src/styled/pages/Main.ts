import styled from '@emotion/styled'

import { media } from 'styled/media'
import { Wrapper } from 'styled/components'

import { ProductsCategoriesGrid } from 'components/products/CategoriesGrid/CategoriesGrid.styled'
import { ProductsBanners } from 'components/products/Banners/Banners.styled'
import { ProductsCarousel } from 'components/products/Carousel/Carousel.styled'

export { Wrapper }

export const Main = styled.main``

export const Top = styled.div`
  padding: 30px 0 40px;

  ${ProductsCategoriesGrid} {
    margin-top: 40px;
  }

  ${media.laptop} {
    ${ProductsCategoriesGrid} {
      margin-top: 30px;
    }
  }
`

export const Sections = styled.div`
  padding: 60px 0;
  background: #fff;

  ${ProductsBanners} {
    margin-top: 40px;
  }

  ${ProductsCarousel} {
    margin-top: 60px;

    &:last-child {
      margin-top: 40px;
    }
  }

  ${media.laptop} {
    padding: 40px 0;

    ${ProductsBanners} {
      margin-top: 20px;
    }

    ${ProductsCarousel} {
      margin-top: 40px;

      &:last-child {
        margin-top: 20px;
      }
    }
  }
`
