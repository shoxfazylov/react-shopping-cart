import { ChangeEvent } from 'react'
import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

import * as S from './TextField.styled'

export type TextFieldProps = Omit<MuiTextFieldProps, 'name'> & UseControllerProps

export const TextField = ({
  type,
  name,
  rules = { required: true },
  onChange,
  ...props
}: TextFieldProps) => {
  const { control } = useFormContext()

  if (type === 'number') {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ field, fieldState }) => {
          const { error } = fieldState

          return (
            <S.TextField
              {...props}
              {...field}
              InputProps={{
                ...props.InputProps,
                classes: {
                  root: 'text-field-input-root',
                  input: 'text-field-input',
                  error: 'text-field-input-error'
                }
              }}
              InputLabelProps={{
                ...props.InputLabelProps,
                shrink: Boolean(field.value)
              }}
              error={Boolean(error?.type)}
              value={field.value}
              onChange={(e) => {
                const value = e.target.value
                if (isNaN(Number(value)) || String(value).charCodeAt(value.length - 1) === 46)
                  return

                return field.onChange(e)
              }}
            />
          )
        }}
      />
    )
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue=""
      render={({ field, fieldState }) => {
        const { error } = fieldState

        return (
          <S.TextField
            {...props}
            value={field.value ?? ''}
            type={type}
            error={Boolean(error?.type)}
            InputProps={{
              ...props.InputProps,
              classes: {
                root: 'text-field-input-root',
                input: 'text-field-input',
                error: 'text-field-input-error'
              }
            }}
            InputLabelProps={{
              ...props.InputLabelProps,
              shrink: Boolean(field.value)
            }}
            onChange={(e) => {
              if (onChange) {
                onChange(e)
              }

              return field.onChange(e)
            }}
          />
        )
      }}
    />
  )
}
