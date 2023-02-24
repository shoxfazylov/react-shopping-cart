import { TextField } from 'ui'
import { TextFieldProps } from 'ui/TextField/TextField'

export const KppField = ({
  rules = { required: true },
  label = 'КПП',
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
