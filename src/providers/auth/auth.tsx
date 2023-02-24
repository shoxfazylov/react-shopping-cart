import { createContext, useMemo, useState, ReactNode } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { authAPI, accountAPI } from 'api'
import { setCookie, deleteCookie, getRoleHomeRoutePath } from 'utils'
import { SignUpData, AuthContextType, ConfirmCode, Tokens } from './auth.types'
import { UserRoleType } from 'types/account'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [isAuth, setAuth] = useState(false)

  const {
    data: user,
    refetch: getUser,
    isLoading: isAccountLoading
  } = useQuery('me', accountAPI.getMe, {
    onSuccess: () => {
      setAuth(true)
    },
    onError: () => {
      // not auth
    }
  })

  const setTokens = async ({ accessToken, refreshToken }: Tokens) => {
    setCookie('accessToken', accessToken)
    setCookie('refreshToken', refreshToken)
    setAuth(true)
  }

  const handleSignUp = {
    onError: () => {
      toast.error('Ошибка')
    }
  }

  const goToUserHomePage = async () => {
    const { data: user } = await getUser()

    if (user) {
      toRoleHomePage(user.role.title)
    }
  }

  const registerIndividual = useMutation(
    'register-individual',
    authAPI.registerIndividual,
    handleSignUp
  )
  const registerOOO = useMutation('register-ooo', authAPI.registerOOO, handleSignUp)
  const registerEntrepreneur = useMutation(
    'register-entrepreneur',
    authAPI.registerEntrepreneur,
    handleSignUp
  )

  const phoneLogin = useMutation('phone-login', authAPI.phoneLogin, {
    onError: () => {
      toast.error('Ошибка')
    }
  })
  const emailLogin = useMutation('email-token', authAPI.createEmailToken, {
    onSuccess: async ({ accessToken, refreshToken }) => {
      setTokens({ accessToken, refreshToken })
      goToUserHomePage()
    },
    onError: ({ response }) => {
      if (response.status === 400) {
        toast.error('Неправильный пароль')
      } else {
        toast.error('Ошибка')
      }
    }
  })

  const verifyCode = useMutation('sms-verify', authAPI.verifyCode, {
    onError: ({ response }) => {
      if (response.status === 400) {
        toast.error('Код введён неверно')
      } else {
        toast.error('Ошибка')
      }
    },
    onSuccess: setTokens
  })
  const createPhoneToken = useMutation('phone-token', authAPI.createPhoneToken, {
    onSuccess: setTokens
  })

  // send sms code
  const signUp = async (data: SignUpData, onSuccess: () => void) => {
    const { userType, firstName, phone, email, inn, checkingAccount, bik, ogrn, legalAddress } =
      data

    switch (userType) {
      case 'individual':
        const { statusText: individualStatus } = await registerIndividual.mutateAsync({
          firstName,
          phone,
          email
        })

        if (individualStatus === 'OK') {
          onSuccess()
        }

        break
      case 'ooo':
        const { statusText: oooStatus } = await registerOOO.mutateAsync({
          firstName,
          email,
          phone,
          bik,
          inn,
          ogrn,
          checkingAccount,
          legalAddress
        })

        if (oooStatus === 'OK') {
          onSuccess()
        }

        break
      case 'entrepreneur':
        const { statusText: entrepreneurStatus } = await registerEntrepreneur.mutateAsync({
          firstName,
          email,
          phone,
          bik,
          inn,
          ogrn,
          checkingAccount
        })

        if (entrepreneurStatus === 'OK') {
          onSuccess()
        }
        break
    }
  }

  const toRoleHomePage = (role: UserRoleType) => {
    router.push(getRoleHomeRoutePath(role))
  }

  const confirmSignUp = async ({ phone, code }: ConfirmCode) => {
    await verifyCode.mutateAsync({ phone, code })
    goToUserHomePage()
  }

  const confirmSignIn = async ({ phone, code }: ConfirmCode) => {
    await createPhoneToken.mutateAsync({ phone, code })
    goToUserHomePage()
  }

  const confirmSupplierSignUp = async ({ phone, code }: ConfirmCode) => {
    await verifyCode.mutateAsync({ phone, code })
    getUser()
  }

  const logout = () => {
    router.push('/')
    setAuth(false)
    deleteCookie('accessToken')
    deleteCookie('refreshToken')
    queryClient.clear()
  }

  const signUpProcessing =
    registerIndividual.isLoading || registerOOO.isLoading || registerEntrepreneur.isLoading

  const confirmSignUpProcessing = phoneLogin.isLoading || verifyCode.isLoading

  const confirmSignInProcessing = phoneLogin.isLoading || createPhoneToken.isLoading

  const memoedValue = useMemo(
    () => ({
      isAuth,
      user,
      isAccountLoading,
      signUp,
      signUpProcessing,
      confirmSignUp,
      confirmSignUpProcessing,
      confirmSignIn,
      confirmSignInProcessing,
      phoneLogin,
      emailLogin,
      confirmSupplierSignUp,
      logout
    }),
    [
      isAuth,
      user,
      isAccountLoading,
      signUp,
      signUpProcessing,
      confirmSignUp,
      confirmSignUpProcessing,
      confirmSignIn,
      confirmSignInProcessing,
      phoneLogin,
      emailLogin,
      confirmSupplierSignUp,
      logout
    ]
  )

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
}
