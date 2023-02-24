import { useFormContext, Controller, UseControllerProps } from 'react-hook-form'

import * as S from './RadioGroup.styled'

interface Option {
  label: string
  value: string
}

type RadioGroup = UseControllerProps & {
  name: string
  options: Option[]
  direction?: 'row' | 'column'
}

export const RadioGroup = ({
  name,
  options,
  rules,
  defaultValue,
  direction = 'row',
  ...props
}: RadioGroup) => {
  const { control } = useFormContext()

  const renderOptions = (options: Option[]) => {
    return options.map(({ label, value }) => {
      return (
        <S.RadioGroupFormControlLabel
          key={value}
          value={value}
          label={label}
          control={<S.Radio />}
        />
      )
    })
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <S.RadioGroup {...props} {...field}>
            {renderOptions(options)}
          </S.RadioGroup>
        )
      }}
    />
  )
}
