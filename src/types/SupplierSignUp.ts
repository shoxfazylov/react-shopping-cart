interface PersonalDataFields {
  lastName: string
  firstName: string
  middleName: string
  phone: string
  email: string
}

interface CompanyDataFields {
  type: 'ooo' | 'entrepreneur'
  name: string
  inn: number
  ogrn: number
  bik: number
  checkingAccount: number
  address: string
}

interface Brand {
  id: number
  name: string
  code: string
  icon: string
  slug: string
}

interface Category {
  id: number
  title: string
}

interface SupplierDataFields {
  type: 'ooo' | 'entrepreneur'
  categories: Category[]
  brands: Brand[]
  warehouseAvailable: string
}

interface DeliveryFields {
  type: 'oner' | 'yourself'
  pickup: 'available' | 'not-available'
}

interface ShopesFields {
  name: string
  address: string
  city: string
  phone: string
  email: string
  howToFindUs: string
  lat: number
  lng: number
}

interface PriceListInformationFields {
  informationExchange: 'API' | 'XLS'
}

interface FinalPostionFields {
  desc: string
}

export interface FormFields {
  personal: PersonalDataFields
  company: CompanyDataFields
  supplier: SupplierDataFields
  delivery: DeliveryFields
  shopes: ShopesFields
  priceList: PriceListInformationFields
  finalPostion: FinalPostionFields
}
