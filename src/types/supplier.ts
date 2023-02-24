export type PriceListType = 'API' | 'XLS'
export type PriceListStatus = 'published' | 'canceled' | 'outdated' | 'uploading'
export type StoreStatus = 'active' | 'disactive' | 'moderation'

export interface PriceList {
  id: number
  uploadDateTime?: string
  createdDateTime: string
  status: PriceListStatus
  active: boolean
  moderatorComment?: string
  errorMessage?: string
  file?: string
  type: PriceListType
  userId: number
}

export interface Store {
  id: number
  name: string
  address: string
  city: string
  lat: number
  lng: number
  phone: string
  status: StoreStatus
  enabled: boolean
  email: string
  desc: string
  images?: {
    id: number
    url: string
  }[]
  userId: number
}
