import { RequisitesItem, User } from './account'

// Принят, Оплачен, Отгружается, Отгружен, Выполнен, Отменен, Отменен c возвратом средств, Повторный
export type OrderStatus =
  | 'accepted'
  | 'payed'
  | 'shipping'
  | 'shipped'
  | 'completed'
  | 'cancelled_1'
  | 'cancelled_2'
  | 'repeated'
  | 'canceled_1'
  | 'canceled_2'

// Принят, Подготовлен, Не доступен для продажи, Отгружен, Отменен
export type ProductStatus = 'ordered' | 'prepared' | 'oos' | 'shipped' | 'cancelled'

export interface Product {
  id: number
  orderId: number
  productId: number
  discount: number
  count: number
  totalPrice: number
  productPrice: number
  currency: string
  name: string
  article: string
  status: ProductStatus
}

export interface PaymentMethod {
  id: number
  title: string
}

export interface OrderDocument {
  id: number
  orderId: number
  createdDateTime: string
  name: string
  file: string
  size: string
}

export interface RefundItem {
  id: number
  orderInfo: {
    id: number
    createdDateTime: string
    status: OrderStatus
  }
  product: Product
  count: number
  createdDateTime: string
}

export interface DeliveryAddress {
  apartment: string
  building: string
  city: string
  house: string
  id: number
  postal: string
  street: string
  title: string
  userId: number
}

export interface OrderDelivery {
  type: {
    id: number
    title: string
  }
  address: DeliveryAddress
  price: number
}

export interface Order {
  id: number
  products: Product[]
  createdDateTime: string
  saleDateTime: string
  note: string
  price: number
  subtotal: number
  paymentMethod: PaymentMethod
  status: OrderStatus
  documents: OrderDocument[]
  refunds: RefundItem[]
  delivery: OrderDelivery
  isArchived: boolean
  requisite: RequisitesItem
  user: User
}
