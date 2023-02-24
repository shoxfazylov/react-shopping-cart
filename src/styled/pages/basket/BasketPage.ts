import styled from '@emotion/styled'
import {Wrapper, Letter} from 'styled/components'
import {media} from 'styled/media'
import {BasketItems} from "../../../components/basket/BasketItems/BasketItems.styled";
import {BasketTotal} from "../../../components/basket/BasketTotal/BasketTotal.styled";

const media610 = media.createMedia(610)
const media960 = media.createMedia(960)
export {Wrapper, Letter}
export const BasketPage = styled.div`
  h2 {
    margin-top: 40px;
  }

  ${BasketItems}, ${BasketTotal} {
    margin-top: 20px;
  }

  ${media610} {
    h2 {
      font-size: 20px;
      white-space: normal;
    }
  }
`
export const BasketWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  align-items: flex-start;

  ${media960} {
    flex-direction: column;
  }
`
export const BasketEmpty = styled.div`
  text-align: center;
`
