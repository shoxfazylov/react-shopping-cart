import { TextField } from 'ui'
import { TextFieldProps } from 'ui/TextField/TextField'

export const InnField = ({
  rules = { required: true },
  label = 'Inn',
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
          return String(value).length === 10 || String(value).length === 12
        }
      }}
    />
  )
}
