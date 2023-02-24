import { useState } from 'react'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'

import { WeSentCode } from 'components'
import { SignUpForm } from 'components/forms'
import { Link } from 'ui'

import { ROUTE_NAMES } from 'core'
import { useAuth } from 'hooks'

import * as S from 'styled/pages/SignUp'

type UserType = 'individual' | 'ooo' | 'entrepreneur'

interface FormFields {
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

type Step = 'data' | 'code'

const SignUpPage = () => {
  const useFormProps = useForm<FormFields>({
    defaultValues: {
      userType: 'individual'
    }
  })
  const { getValues, handleSubmit, watch } = useFormProps
  const phone = getValues('phone')

  const [step, setStep] = useState<Step>('data')

  const { signUp, confirmSignUp, signUpProcessing, confirmSignUpProcessing } = useAuth()

  const onSignUpSuccess = () => {
    setStep('code')
  }

  const onSignUpSubmit = (data: FormFields) => {
    signUp(data, onSignUpSuccess)
  }

  const onCodeSubmit = (code: number) => {
    confirmSignUp({ phone, code: String(code) })
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <S.Box>
        <S.Top>
          <Typography variant="h2">Register</Typography>
        </S.Top>

        <S.StepsContent>
          {step === 'data' ? (
            <FormProvider {...useFormProps}>
              <SignUpForm
                userType={watch('userType')}
                inProcess={signUpProcessing}
                onSubmit={handleSubmit(onSignUpSubmit)}
              />
            </FormProvider>
          ) : (
            <WeSentCode
              phone={phone}
              loading={confirmSignUpProcessing}
              onResend={() => signUp(getValues(), onSignUpSuccess)}
              onCodeSubmit={onCodeSubmit}
            />
          )}
        </S.StepsContent>

        <S.Bottom>
          <Typography>Have an account?</Typography>
          <Link href={ROUTE_NAMES.SIGN_IN}>Login</Link>
        </S.Bottom>
      </S.Box>
    </>
  )
}

export default SignUpPage
