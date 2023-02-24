import Link from 'next/link'

import {ROUTE_NAMES} from 'core'

import * as S from './ShoppingCartLink.styled'

import ShoppingCartIcon from 'public/icons/shopping-cart.svg'

export const ShoppingCartLink = () => {

    return (
        <Link href={ROUTE_NAMES.SHOPPING_CART} passHref>
            <S.ShoppingCartLink>
                <ShoppingCartIcon/>
                <span>Basket</span>
                <S.ShoppingCartItemsCount>0</S.ShoppingCartItemsCount>
            </S.ShoppingCartLink>
        </Link>
    )
}
