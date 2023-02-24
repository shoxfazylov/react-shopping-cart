import Link from 'next/link'
import Image from 'next/image'

import { Rating } from 'ui'
import { BasketButton } from 'common/buttons'

import { numberToPrice } from 'utils'

import * as S from './Card.styled'

import productPlaceholderImg from 'public/img/placeholders/product.png'

interface Price {
  old: number
  new: number
}

interface ProductCardProps {
  name: string
  productCode: number
  rating: number
  commentsNumber: number
  price: Price
  img: string
  link: string
}

export const ProductCard = ({
  name,
  productCode,
  rating,
  commentsNumber,
  price,
  img,
  link
}: ProductCardProps) => {
  return (
    <Link href={link} passHref>
      <S.ProductCard>
        <S.Img>
          <Image src={productPlaceholderImg} alt={name} quality={100} />
        </S.Img>

        <S.Info>
          <S.InfoTop>
            <S.ProductCode>
              <span>Article:</span>
              <span>{productCode}</span>
            </S.ProductCode>

            <S.RatingComments>
              <Rating defaultValue={rating} readOnly />
              <S.Rating>{rating.toPrecision(2)}</S.Rating>
              <S.CommentsNumber>({commentsNumber})</S.CommentsNumber>
            </S.RatingComments>
          </S.InfoTop>

          <S.Name>{name}</S.Name>

          <S.InfoBottom>
            <S.Price>
              <S.PriceNew>{numberToPrice(price.new)}</S.PriceNew>

              <S.PriceOld>{numberToPrice(price.old)}</S.PriceOld>
            </S.Price>

            <BasketButton />
          </S.InfoBottom>
        </S.Info>
      </S.ProductCard>
    </Link>
  )
}
