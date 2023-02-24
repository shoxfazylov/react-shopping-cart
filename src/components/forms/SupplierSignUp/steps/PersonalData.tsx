import { TextField, PhoneField, EmailField } from 'ui'

export const PersonalDataStep = () => {
  return (
    <>
      <TextField name="personal.lastName" label="Фамилия" />
      <TextField name="personal.firstName" label="Имя" />
      <TextField name="personal.middleName" label="Отчество" />
      <PhoneField name="personal.phone" />
      <EmailField name="personal.email" />
    </>
  )
}
