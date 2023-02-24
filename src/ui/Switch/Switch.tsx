import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch'
import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'

import * as S from './Switch.styled'

export type SwitchProps = MuiSwitchProps & UseControllerProps

export const Switch = ({ name, ...props }: SwitchProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={false}
      render={({ field }) => {
        return <S.Switch {...props} {...field} checked={field.value} />
      }}
    />
  )
}
