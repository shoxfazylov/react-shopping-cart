import { TextField } from 'ui'
import { TextFieldProps } from 'ui/TextField/TextField'

export const BikField = ({
  rules = { required: true },
  label = 'БИК',
  ...props
}: TextFieldProps) => {
  return (
    <TextField
      {...props}
      type="number"
      label={label}
      rules={{
        ...rules,
        validate: (value: number) => {
          return String(value).length === 9
        }
      }}
    />
  )
}
