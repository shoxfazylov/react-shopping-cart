import InputMask from 'react-input-mask'
import { TextFieldProps } from '@mui/material/TextField'
import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'

import { TextField } from 'ui/TextField/TextField.styled'

export const PhoneField = ({
  type,
  name,
  rules = { required: true },
  ...props
}: Omit<TextFieldProps, 'name'> & UseControllerProps) => {
  const { control } = useFormContext()

  const getPhoneWithoutMask = (phoneMask: string) => {
    return phoneMask.replaceAll(/[ |(/)|-]/g, '')
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        pattern: {
          value: /\+[0-9]{11}/,
          message: 'Error format'
        }
      }}
      render={({ field: { value, onChange }, fieldState }) => {
        const { error } = fieldState

        return (
          <InputMask
            mask="+7 (999) 999 - 99 - 99"
            value={value ?? ''}
            onChange={({ target: { value } }) => {
              return onChange(getPhoneWithoutMask(value))
            }}
          >
            {(inputProps: any) => (
              <TextField
                label="Phone"
                {...props}
                {...inputProps}
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
                  shrink: Boolean(value)
                }}
                type="tel"
                name={name}
                error={Boolean(error?.type)}
              />
            )}
          </InputMask>
        )
      }}
    />
  )
}
