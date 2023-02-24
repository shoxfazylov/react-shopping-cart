import { Order } from 'types/orders'

export const formatOrder = (order: Order) => {
  const { id, createdDateTime, status, paymentMethod, products, delivery, price } = order

  return {
    id,
    date: createdDateTime,
    status,
    products: products.map(({ name }) => name),
    paymentType: paymentMethod.title,
    delivery: {
      type: delivery.type.title,
      price: delivery.price
    },
    priceTotal: price
  }
}
