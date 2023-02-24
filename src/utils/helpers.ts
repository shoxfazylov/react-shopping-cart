import {val} from "dom7";

export const formatPrice = (price: number) => {
    const options1 = { style: 'currency', currency: 'RUB' };
    const numberFormat1 = new Intl.NumberFormat('ru-RU', options1);
    return numberFormat1.format(price)
}

