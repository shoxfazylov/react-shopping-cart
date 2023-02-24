import styled from '@emotion/styled'

export const ProductCard = styled.a`
  display: flex;
  flex-direction: column;
  height: 410px;
  padding: 30px 20px 20px;
  background: #fff;
  border: 1px solid #dedee2;
  border-radius: 10px;
  transition: 0.3s;
  box-sizing: border-box;

  &:hover {
    border-color: #f4f5f7;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  }
`

export const Img = styled.div`
  height: 220px;
  margin: 0 auto;
`

export const Info = styled.div`
  margin-top: 15px;
`

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductCode = styled.div`
  span {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    color: #7a7680;

    &:first-child {
      color: #7a7680;
    }

    &:last-child {
      margin-left: 3px;
      color: #505255;
    }
  }
`

export const RatingComments = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }
`

export const Rating = styled.span`
  margin-left: 6px;
  color: #1c1d1e;
`

export const CommentsNumber = styled.span`
  margin-left: 3px;
  color: #5f6569;
`

export const Name = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`

export const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
`

export const Price = styled.div`
  display: flex;
`

export const PriceNew = styled.span`
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
`

export const PriceOld = styled.span`
  margin-left: 10px;
  color: #7a7680;
  line-height: 20px;
  text-decoration: line-through;
`
