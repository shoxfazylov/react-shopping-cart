export interface ProductInfo {
  id: number
  categoryId: number
  article: string
  barcode: string
  createdDateTime: string
  description: string
  title: string
  titleShort: string
  width: number
  length: number
  price: string
  image: string
  isInitial: boolean
}

export interface Product {
  id: number
  productInfo: ProductInfo
  rating: number
  title: string
  deliveryPeriod: number
  availableAmount: number
  price: number
  isAvailable: boolean
}
