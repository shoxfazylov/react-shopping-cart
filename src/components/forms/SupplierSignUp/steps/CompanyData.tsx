import { useFormContext } from 'react-hook-form'

import { TextField, RadioGroup } from 'ui'

interface CompanyType {
  label: string
  value: 'ooo' | 'entrepreneur'
}

export const CompanyDataStep = () => {
  const { watch } = useFormContext()

  const companyTypes: CompanyType[] = [
    { label: 'ООО', value: 'ooo' },
    { label: 'ИП', value: 'entrepreneur' }
  ]

  const selectCompanyType = watch('company.type')

  return (
    <>
      <RadioGroup name="company.type" options={companyTypes} defaultValue="ooo" />
      <TextField name="company.name" label="Company name" />
      <TextField name="company.bik" type="number" label="Bank" />
      <TextField name="company.checkingAccount" type="number" label="checking account" />
      <TextField
        name="company.address"
        label={selectCompanyType === 'entrepreneur' ? 'Register address' : 'Legal address'}
      />
    </>
  )
}
