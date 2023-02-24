import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox'

import * as S from './Checkbox.styled'

type CheckboxProps = MuiCheckboxProps &
  UseControllerProps & {
    label?: string
  }

export const Checkbox = ({ name, label, rules }: CheckboxProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => {
        return label ? (
          <S.FormControl label={label} control={<S.Checkbox {...field} />} />
        ) : (
          <S.Checkbox {...field} />
        )
      }}
    />
  )
}
