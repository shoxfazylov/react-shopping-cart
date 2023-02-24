export type UserRoleType =
  | 'Admin'
  | 'Manager'
  | 'Support'
  | 'Supplier'
  | 'Person'
  | 'Entity'
  | 'PersonEntity'

export interface User {
  id: number
  phone: string
  email: string
  firstName: string
  middleName: string
  lastName: string
  role: {
    id: number
    title: UserRoleType
  }
}

export interface RequisitesItem {
  id: number
  name: string
  accountNumber: string
  bik: string
}

export interface Address {
  id: number
  name: string
  postalCode: string
  city: string
  street: string
  house: string
  building?: string
  apartment: string
}
