import { Controller, useFormContext, UseControllerProps } from 'react-hook-form'
import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'

import * as S from './Autocomplete.styled'

export const Autocomplete = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  name,
  rules,
  defaultValue,
  loadingText = 'Загрузка...',
  noOptionsText = 'Не найдено',
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & UseControllerProps) => {
  const useForm = useFormContext()

  return (
    <Controller
      control={useForm?.control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <S.Autocomplete>
            <MuiAutocomplete<T, Multiple, DisableClearable, FreeSolo>
              {...props}
              {...field}
              loadingText={loadingText}
              noOptionsText={noOptionsText}
              onChange={(_, value) => {
                return field.onChange(value)
              }}
            />
          </S.Autocomplete>
        )
      }}
    />
  )
}
