import { Order } from 'types/orders'
import { Store as SupplierStore } from './supplier'

export interface SupplierLegalPerson {
  id: number
  type: 'Entity' | 'PersonEntity'
  additionally: string | null
  ownershipForm: 'private' | 'public' | null
  name: string
  inn: number
  kpp: number | null
  ogrn: number
  address: string
  phone: string | null
  website: string | null
  email: string | null
}

export interface AccountingFile {
  id: number
  name: string
  size: string
  file: string
  uploaded: string
  accounting: number
}

export interface AccountingItem {
  id: number
  files: AccountingFile[]
  created: string
  user: number
}

export interface RequisitesItem {
  id: number
  accountNumber: string
  bik: string
  name: string
}

export interface Supplier {
  id: number
  firstName: string
  middleName: string
  lastName: string
  email: string
  phone: string
  active: boolean
  legalPerson: SupplierLegalPerson
  stores: SupplierStore[]
  orders: Order[]
  accounting: AccountingItem[]
  requisites: RequisitesItem[]
  mainRequisites: RequisitesItem | null
}

export interface Customer {
  id: number
  firstName: string
  middleName: string
  lastName: string
  phone: string
  email: string
  active: boolean
  orders: Order[]
}
