import styled from '@emotion/styled'

import { Wrapper } from 'styled/components'
import { media } from 'styled/media'

import { CarBrands } from 'components/cars/CarBrands/CarBrands.styled'
import { PageTitle } from 'components/PageTitle/PageTitle.styled'

export { Wrapper }

export const NonOriginalSparePartsPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  footer {
    margin-top: auto;
  }

  ${PageTitle} {
    margin-bottom: 10px;
  }
`

export const PageSubtitle = styled.p`
  color: #7a7680;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 30px;
  padding-bottom: 60px;

  ${CarBrands} {
    margin-top: 40px;
  }

  ${media.laptop} {
    padding-bottom: 40px;
  }
`

export const PopularBrands = styled.div`
  margin-top: 20px;
`

export const PopularBrandsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
`

export const Brand = styled.span`
  display: inline-block;
  padding: 10px 12px 8px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(46, 16, 102, 0.05);
  border-radius: 6px;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: #3d3d4b;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffffff;
    background: var(--color-primary);
    box-shadow: none;
  }
`
