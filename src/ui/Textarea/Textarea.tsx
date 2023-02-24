import { TextareaAutosizeProps } from '@mui/material/TextareaAutosize'
import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'

import * as S from './Textarea.styled'

export const Textarea = ({ name, ...props }: TextareaAutosizeProps & UseControllerProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return <S.Textarea {...props} {...field} />
      }}
    />
  )
}
