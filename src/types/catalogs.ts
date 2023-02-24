export interface CarBrand {
  code: string
  brand: string
  name: string
  icon: string
  vinExample: string
}

export interface CarBrands {
  [key: string]: CarBrand[]
}

export interface SparePartsCategory {
  parentCategoryId: string
  categoryId: string
  name: string
  code: string
  childrens: boolean
}

export interface FindedCarDetails {
  name: string
  prodRange: string
  market: string
  engine?: string
  engineInfo?: string
  salesCode?: string
  transmission?: string
}

export interface FindedCar {
  name: string
  vehicleId: string
  brand: string
  catalog: string
  details: FindedCarDetails
  ssd: string
}

export interface SubCategoryValue {
  id: string
  name: string
}

export interface SubCategory {
  id: string
  name: string
  subCategories: SubCategoryValue[]
}

export interface Category {
  id: string
  name: string
  subCategories: SubCategory[]
}

export interface CategoryGroup {
  id: string
  name: string
  categories: Category[]
}

export interface SparePartUnit {
  unitId: string
  code: string
  name: string
  ssd: string
  imageUrl: string
  imageLargeUrl: string
}

export interface FindedCarAttribute {
  name: string
  value: string
}

export interface FindedCarByVinOrBodyNumber {
  attributes: FindedCarAttribute[]
  brand: string
  name: string
  catalog: string
  ssd: string
  vehicleId: number
  units: SparePartUnit[]
}

export interface UnitDetailInfo {
  code: string
  imageUrl: string
  largeImageUrl: string
  name: string
  ssd: string
  unitId: string
}

export interface UnitDetailImagePositions {
  code: string
  type: string
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface UnitDetailUnitDetails {
  amount: string
  family: string
  familyName: string
  macrofamily: string
  measurementUnit: string
  pattern: string
  weigth: string
}

export interface UnitDetailUnit {
  codeOnImage: string
  name: string
  oem: string
  ssd: string
  imagePositions: UnitDetailImagePositions
  details: UnitDetailUnitDetails
}

export interface UnitDetail {
  unitInfo: UnitDetailInfo
  units: UnitDetailUnit[]
}
