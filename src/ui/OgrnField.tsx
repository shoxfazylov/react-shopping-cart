import { TextField } from 'ui'
import { TextFieldProps } from 'ui/TextField/TextField'

export const OgrnField = ({
  rules = { required: true },
  label = 'OGRN',
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
          return String(value).length === 13 || String(value).length === 15
        }
      }}
    />
  )
}
