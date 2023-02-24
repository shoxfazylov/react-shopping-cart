import { TextField } from 'ui'
import { TextFieldProps } from 'ui/TextField/TextField'

export const EmailField = ({
  rules = { required: true },
  label = 'E-mail',
  ...props
}: TextFieldProps) => {
  return (
    <TextField
      {...props}
      type="email"
      label={label}
      rules={{
        ...rules,
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: 'Неправильный формат'
        }
      }}
    />
  )
}
