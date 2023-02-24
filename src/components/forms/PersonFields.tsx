import { TextField, PhoneField, EmailField } from 'ui'

interface PersonFieldsProps {
  namePrefix?: string
}

export const PersonFields = ({ namePrefix }: PersonFieldsProps) => {
  const withNamePrefix = (name: string, namePrefix?: string) => {
    if (!namePrefix) return name

    return `${namePrefix}.${name}`
  }

  return (
    <>
      <TextField name={withNamePrefix('lastName', namePrefix)} label="Фамилия" />
      <TextField name={withNamePrefix('firstName', namePrefix)} label="Имя" />
      <TextField name={withNamePrefix('middleName', namePrefix)} label="Отчество" />
      <PhoneField name={withNamePrefix('phone', namePrefix)} />
      <EmailField name={withNamePrefix('email', namePrefix)} label="Электронная почта" />
    </>
  )
}
