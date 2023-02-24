import { API } from 'core'

import {
  RegisterOOO,
  RegisterEntrepreneur,
  RegisterIndividual,
  CreateEmailToken,
  Tokens,
  CreatePhoneToken,
  VerifyCode
} from './auth.types'

const root = '/account'

export const phoneLogin = (phone: string) => {
  return API.post(`${root}/login-phone/`, { phone })
}

export const registerOOO = ({
  firstName,
  email,
  phone,
  bik,
  inn,
  ogrn,
  checkingAccount,
  legalAddress
}: RegisterOOO) => {
  return API.post(`${root}/register-entity/`, {
    first_name: firstName,
    email,
    phone,
    bik,
    inn,
    ogrn,
    rsch: checkingAccount,
    address: legalAddress
  })
}

export const registerEntrepreneur = ({
  firstName,
  phone,
  email,
  inn,
  checkingAccount,
  bik,
  ogrn
}: RegisterEntrepreneur) => {
  return API.post(`${root}/register-person-entity/`, {
    first_name: firstName,
    phone,
    email,
    inn,
    rsch: checkingAccount,
    bik,
    ogrn
  })
}

export const verifyCode = async ({ phone, code }: VerifyCode) => {
  const { data } = await API.post<Tokens>(`${root}/sms-verify/`, {
    phone,
    sms_code: code
  })

  return {
    accessToken: data.access,
    refreshToken: data.refresh
  }
}

export const registerIndividual = ({ firstName, phone, email }: RegisterIndividual) => {
  return API.post(`${root}/register-person/`, { first_name: firstName, phone, email })
}

export const createEmailToken = async ({ email, password }: CreateEmailToken) => {
  const { data } = await API.post<Tokens>(`${root}/token-email`, { email, password })
  return { accessToken: data.access, refreshToken: data.refresh }
}

export const createPhoneToken = async ({ phone, code }: CreatePhoneToken) => {
  const { data } = await API.post<Tokens>(`${root}/token-phone`, { phone, sms_code: code })

  return { accessToken: data.access, refreshToken: data.refresh }
}

export const refreshAccessToken = async (refreshToken: string) => {
  const { data } = await API.post<Tokens>(`${root}/token-refresh`, { refresh: refreshToken })
  return data.access
}
