import { useState } from 'react'
import Head from 'next/head'
import { FormProvider, useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'

import { SignInForm } from 'components/forms'
import { Link } from 'ui'

import { ROUTE_NAMES } from 'core'
import { useAuth } from 'hooks'

import * as S from 'styled/pages/SignIn'

interface FormFields {
  email: string
  password: string
  phone: string
  remember: boolean
}

type TabValue = 'email' | 'phone'

type Step = 'phone' | 'code'

const SignInPage = () => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, getValues } = useFormProps

  const [tab, setTab] = useState<TabValue>('email')
  const [step, setStep] = useState<Step>('phone')

  const phone = getValues('phone')

  const { phoneLogin, confirmSignIn, emailLogin, confirmSignInProcessing } = useAuth()

  const onTabChange = (value: TabValue) => {
    setTab(value)
  }

  const onSignIn = async ({ email, password, phone, remember }: FormFields) => {
    if (tab === 'email') {
      emailLogin.mutateAsync({ email, password })
    }

    if (tab === 'phone') {
      await phoneLogin.mutateAsync(phone)
      setStep('code')
    }
  }

  const onCodeResend = () => {
    phoneLogin.mutate(phone)
  }

  const onCodeSubmit = async (code: number) => {
    await confirmSignIn({ phone, code: String(code) })
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <S.Box>
        <S.Top>
          <Typography variant="h2">Login</Typography>
        </S.Top>

        <FormProvider {...useFormProps}>
          <SignInForm
            phone={phone}
            tab={tab}
            step={step}
            isCodeProcessing={confirmSignInProcessing}
            onCodeSubmit={onCodeSubmit}
            onTabChange={onTabChange}
            onCodeResend={onCodeResend}
            onSubmit={handleSubmit(onSignIn)}
          />
        </FormProvider>

        <S.Bottom>
          <Typography>Don't have an account?</Typography>
          <Link href={ROUTE_NAMES.SIGN_UP}>Register</Link>
        </S.Bottom>
      </S.Box>
    </>
  )
}

export default SignInPage
