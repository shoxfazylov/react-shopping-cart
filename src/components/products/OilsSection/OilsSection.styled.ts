import styled from '@emotion/styled'

export const ProductsOilsSection = styled.section``

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Carousel = styled.div`
  margin-top: 20px;

  .swiper {
    width: 100%;
    padding: 18px;
    margin-left: -18px;
    margin-top: -18px;
  }

  .swiper-slide {
    width: 300px;
    height: 410px;
  }
`

export const Banner = styled.a`
  max-width: 300px;
  width: 100%;
  height: 410px;
  padding: 30px;
  border-radius: 10px;
  background-color: var(--color-primary);
  box-sizing: border-box;

  p {
    font-weight: 700;
    line-height: 28.8px;
    color: #fff;
  }
`
