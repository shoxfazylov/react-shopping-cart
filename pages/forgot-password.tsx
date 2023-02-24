import Head from 'next/head'
import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { Link, EmailField, TextField, Button } from 'ui'

import { ROUTE_NAMES } from 'core'
import { accountAPI } from 'api'

import * as S from 'styled/pages/ForgotPassword'

interface FormFields {
  email: string
  newPassword: string
}

const ForgotPasswordPage = () => {
  const router = useRouter()
  const { reset_uid: uid, reset_token: token } = router.query
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  const [step, setStep] = useState(0)

  useEffect(() => {
    if (uid && token) {
      setStep(1)
    }
  }, [uid, token])

  const resetPassword = useMutation(accountAPI.resetPassword, {
    onError: () => {
      toast.error('Error')
    },
    onSuccess: () => {
      toast.success('Message sent to your email address')
    }
  })

  const resetPasswordConfirm = useMutation(accountAPI.resetPasswordConfirm, {
    onError: () => {
      toast.error('Error')
    },
    onSuccess: () => {
      setStep(0)
      toast.success('Password changed successfully')
      router.replace(router.pathname, undefined, { shallow: true })
    }
  })

  const onResetPasswordSubmit = ({ email }: FormFields) => {
    resetPassword.mutate(email)
    reset({
      email: ''
    })
  }

  const onResetPasswordConfirmSubmit = ({ newPassword }: FormFields) => {
    if (typeof uid === 'string' && typeof token === 'string') {
      resetPasswordConfirm.mutate({ uid, token, newPassword })
    }
  }

  return (
    <>
      <Head>
        <title>Password recovery</title>
      </Head>

      <S.Box>
        <S.Top>
          <Typography variant="h2">Password recovery</Typography>
        </S.Top>

        <S.Content>
          <FormProvider {...useFormProps}>
            {step === 0 ? (
              <S.Form onSubmit={handleSubmit(onResetPasswordSubmit)}>
                <EmailField name="email" />

                <Button type="submit" fullWidth loading={resetPassword.isLoading}>
                  Restore
                </Button>
              </S.Form>
            ) : (
              <S.Form onSubmit={handleSubmit(onResetPasswordConfirmSubmit)}>
                <TextField name="newPassword" type="password" label="New password" />

                <Button type="submit" fullWidth loading={resetPasswordConfirm.isLoading}>
                  Save
                </Button>
              </S.Form>
            )}
          </FormProvider>
        </S.Content>

        {false && (
          <S.Content>
            <FormProvider {...useFormProps}>
              <S.Form onSubmit={handleSubmit(onResetPasswordConfirmSubmit)}>
                <TextField name="newPassword" type="password" label="Новый пароль" />

                <Button type="submit" fullWidth>
                  Save
                </Button>
              </S.Form>
            </FormProvider>
          </S.Content>
        )}

        <S.Bottom>
          <Typography>Remembered the password?</Typography>
          <Link href={ROUTE_NAMES.SIGN_IN}>Sign in</Link>
        </S.Bottom>
      </S.Box>
    </>
  )
}

export default ForgotPasswordPage
