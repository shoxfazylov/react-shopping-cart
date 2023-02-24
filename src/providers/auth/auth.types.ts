import { VerifyCode as VerifyCodeReq } from 'api/auth/auth.types'
import { AxiosResponse } from 'axios'
import { UseMutationResult } from 'react-query'

import { UserRoleType } from 'types/account'

export type UserType = 'individual' | 'ooo' | 'entrepreneur'

export interface SignUpData {
  userType: UserType
  firstName: string
  phone: string
  email: string
  inn: number
  checkingAccount: number
  bik: number
  ogrn: number
  legalAddress: string
}

export interface User {
  id: number
  firstName: string
  middleName: string
  lastName: string
  phone: string
  email: string
  role: {
    id: number
    title: UserRoleType
  }
}

export type VerifyCode = UseMutationResult<
  {
    phone: string
    code: string
  },
  unknown,
  VerifyCodeReq,
  unknown
>

export type PhoneLogin = UseMutationResult<AxiosResponse<any, any>, unknown, string, unknown>
export type EmailLogin = UseMutationResult<
  { accessToken: string; refreshToken: string },
  unknown,
  { email: string; password: string },
  unknown
>

export interface ConfirmCode {
  phone: string
  code: string
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface AuthContextType {
  isAuth: boolean
  user?: User
  isAccountLoading: boolean
  signUpProcessing: boolean
  confirmSignUpProcessing: boolean
  confirmSignInProcessing: boolean
  signUp: (data: SignUpData, onSuccess: () => void) => void
  phoneLogin: PhoneLogin
  emailLogin: EmailLogin
  confirmSignIn: ({ phone, code }: ConfirmCode) => Promise<void>
  confirmSignUp: ({ phone, code }: ConfirmCode) => Promise<void>
  confirmSupplierSignUp: ({ phone, code }: ConfirmCode) => Promise<void>
  logout: () => void
}
