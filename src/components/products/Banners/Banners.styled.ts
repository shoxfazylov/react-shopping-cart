import styled from '@emotion/styled'

import { media } from 'styled/media'

import { ButtonWithArrow } from 'common/buttons/WithArrow/WithArrow.styled'

export const ProductsBanners = styled.section`
  position: relative;

  .swiper {
    width: 100%;
    padding: 0 18px;
    margin-left: -18px;

    &-slide {
      width: 407px;
      height: 250px;
    }
  }

  ${media.tablet} {
    .swiper-slide {
      height: 180px;
    }
  }

  ${media.mobile} {
    .swiper-slide {
      width: 203px;
    }
  }
`

export const Banner = styled.div`
  height: 100%;
  padding: 30px;
  background: #e9eefa;
  box-sizing: border-box;

  h4 {
    display: flex;
    flex-direction: column;
    line-height: 32px;
  }

  ${ButtonWithArrow} {
    margin-top: 20px;

    span:first-child {
      padding-top: 2px;
    }
  }

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h4 {
      font-size: 18px;
      line-height: 22px;
    }

    ${ButtonWithArrow} {
      margin-top: auto;
    }
  }

  ${media.mobile} {
    padding: 20px;
  }
`
