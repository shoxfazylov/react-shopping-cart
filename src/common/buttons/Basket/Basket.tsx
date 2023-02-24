import * as S from './Basket.styled'

const ShoppingCartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path d="M5.874 7l1.535 7.246a2 2 0 002.156 1.576l6.816-.682a2 2 0 001.741-1.505l1.348-5.392A1 1 0 0018.5 7h-8.313M5.874 7l-.65-3H3.5M17.109 19.267a.366.366 0 10.004.732.366.366 0 00-.004-.732M8.697 19.267a.363.363 0 00-.364.366.366.366 0 10.364-.366"></path>
    </svg>
  )
}

export const BasketButton = () => {
  return (
    <S.BasketButton>
      <ShoppingCartIcon />
    </S.BasketButton>
  )
}
