import { FormEventHandler } from 'react'

import { RadioGroup, TextField, PhoneField, InnField, OgrnField, BikField, Button } from 'ui'

import * as S from './SignUp.styled'

type UserType = 'individual' | 'ooo' | 'entrepreneur'

interface UserTypeOption {
  label: string
  value: UserType
}

interface SignUpFormProps {
  userType: UserType
  inProcess: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
}

export const SignUpForm = ({ userType, inProcess, onSubmit }: SignUpFormProps) => {
  const userTypes: UserTypeOption[] = [
    { label: 'Individual', value: 'individual' },
    { label: 'Legal', value: 'ooo' }
  ]

  return (
    <S.SignUpForm onSubmit={onSubmit}>
      <RadioGroup name="userType" options={userTypes} />

      <TextField name="firstName" label="Your name" />

      <PhoneField name="phone" />

      <TextField type="email" name="email" label="E-mail" />

      {userType !== 'individual' && (
        <>
          <InnField name="inn" />
          <TextField type="number" name="checkingAccount" label="Р/сч" />
          <BikField name="bik" />
          <OgrnField name="ogrn" />
        </>
      )}

      {userType === 'ooo' && <TextField name="legalAddress" label="Legal address" />}

      <Button type="submit" loading={inProcess} fullWidth>
        Register
      </Button>
    </S.SignUpForm>
  )
}
