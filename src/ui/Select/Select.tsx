import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'
import { SelectProps as MuiSelectProps } from '@mui/material/Select'
import IconButton from '@mui/material/IconButton'

import * as S from './Select.styled'

import CrossIcon from 'public/icons/cross.svg'

type BaseProps = MuiSelectProps & UseControllerProps

interface Option {
  label: string
  value: string | number | readonly string[] | undefined
}

export interface SelectProps extends BaseProps {
  withReset?: boolean
  options: Option[]
  isLoading?: boolean
}

export const Select = ({
  name,
  rules,
  options,
  label,
  withReset,
  isLoading = false,
  ...props
}: SelectProps) => {
  const { control, resetField } = useFormContext()

  const menuItems = options.map(({ label, value }) => {
    return (
      <S.SelectMenuItem key={label} value={value}>
        {label}
      </S.SelectMenuItem>
    )
  })

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field }) => {
        return (
          <S.SelectFormControl>
            {label && <S.SelectInputLabel>{label}</S.SelectInputLabel>}

            <S.Select
              {...props}
              {...field}
              onChange={(e, child) => {
                if (props.onChange) {
                  props.onChange(e, child)
                }

                return field.onChange(e)
              }}
            >
              {menuItems}
            </S.Select>

            {withReset && field.value && (
              <S.RemoveButton
                onClick={() => {
                  resetField(name)
                }}
              >
                <IconButton disableRipple>
                  <CrossIcon />
                </IconButton>
              </S.RemoveButton>
            )}
          </S.SelectFormControl>
        )
      }}
    />
  )
}
