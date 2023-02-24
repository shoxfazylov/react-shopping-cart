import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { media } from 'styled/media'

import { Backdrop, Button } from 'ui'

import { ButtonProps } from 'ui/Button/Button'
import { ButtonContent } from 'ui/Button/Button.styled'

const media666 = media.createMedia(666)
const media540 = media.createMedia(540)

interface AllCategoriesProps {
  open: boolean
}

interface CategoriesButtonProps extends ButtonProps {
  open: boolean
}

export const AllCategories = styled.div<AllCategoriesProps>`
  position: relative;
  z-index: 100;

  ${Backdrop} {
    div[role='tooltip'] {
      width: 100%;
    }
  }

  ${({ open }) =>
    open &&
    css`
      z-index: 1400;
    `}
`
export const CategoriesButton = styled((props: CategoriesButtonProps) => <Button {...props} />)`
  position: relative;
  z-index: 10;
  height: 44px;

  ${ButtonContent} {
    margin-top: 1px;
  }

  ${media666} {
    width: 44px;
    padding: 0;
    flex-shrink: 0;

    .button-start-icon {
      margin-right: 0;
      margin-left: 0;
    }

    ${ButtonContent} {
      display: none;
    }
  }

  ${({ open }) =>
    open &&
    css`
      background: #0347ab;

      &:hover {
        background: #0347ab;
      }
    `}
`

export const AllCategoriesContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  ${media666} {
    padding: 0 15px;
  }
`

export const AllCategoriesBox = styled.div`
  display: flex;
  max-width: 1260px;
  width: 100%;
  margin: 10px auto 0;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(33, 34, 46, 0.15);
  border-radius: 10px;
  box-sizing: border-box;

  ${media.tablet} {
    padding: 10px;
  }
`

export const Categories = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  width: 100%;
  grid-gap: 0 20px;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    grid-gap: 0 10px;
  }

  ${media540} {
    grid-template-columns: 1fr;
  }
`

export const CategoryItem = styled.li`
  width: 100%;
  border-radius: 10px;
  transition: 0.3s;
  padding: 14px 20px;
  box-sizing: border-box;

  &:hover {
    background: #f4f5f7;

    span {
      color: var(--color-primary);
    }
  }
`

export const CategoryLink = styled.a`
  display: flex;
  align-items: center;

  span {
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 14px;
    transition: 0.3s;
    white-space: normal;
  }
`

export const CategoryItemIcon = styled.span`
  width: 32px;
  height: 32px;
  margin-right: 15px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const OilsBanner = styled.div`
  position: relative;
  width: 260px;
  height: 240px;
  flex-shrink: 0;
  margin-left: 20px;
  border-radius: 10px;
  padding: 20px 30px;
  background: #0347ab;
  box-sizing: border-box;

  p {
    font-family: 'Stolzl';
    font-weight: 500;
    line-height: 22px;
    color: #fff;
    white-space: normal;
  }

  ${media.laptop} {
    display: none;
  }
`
