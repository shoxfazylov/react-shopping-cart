import { OrderStatus as OrderStatusValue, ProductStatus as ProductStatusValue } from 'types/orders'

interface OrderStatus {
  label: string
  value: OrderStatusValue
}

interface ProductStatus {
  label: string
  value: ProductStatusValue
}

export const ORDER_STATUSES: OrderStatus[] = [
  { label: 'Принят', value: 'accepted' },
  { label: 'Оплачен', value: 'payed' },
  { label: 'Отгружается', value: 'shipping' },
  { label: 'Отгружен', value: 'shipped' },
  { label: 'Выполнен', value: 'completed' },
  { label: 'Отменён', value: 'cancelled_1' },
  { label: 'Отменён с возвратом средств', value: 'cancelled_2' },
  { label: 'Повторный', value: 'repeated' },
  { label: 'Отменён', value: 'canceled_1' },
  { label: 'Отменён', value: 'canceled_2' }
]

export const PRODUCT_STATUSES: ProductStatus[] = [
  { label: 'Принят', value: 'ordered' },
  { label: 'Подготовлен', value: 'prepared' },
  { label: 'Не доступен для продажи', value: 'oos' },
  { label: 'Отгружен', value: 'shipped' },
  { label: 'Отменён', value: 'cancelled' }
]
