export interface RegisterOOO {
  firstName: string
  phone: string
  email: string
  inn: number
  checkingAccount: number
  bik: number
  ogrn: number
  legalAddress: string
}

export interface RegisterEntrepreneur {
  firstName: string
  phone: string
  email: string
  inn: number
  checkingAccount: number
  bik: number
  ogrn: number
}

export interface RegisterIndividual {
  firstName: string
  phone: string
  email: string
}

export interface CreateEmailToken {
  email: string
  password: string
}

export interface CreatePhoneToken {
  phone: string
  code: string
}

export interface Tokens {
  access: string
  refresh: string
}

export interface VerifyCode {
  phone: string
  code: string
}
