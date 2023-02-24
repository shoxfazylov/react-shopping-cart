import { Controller, useFormContext } from 'react-hook-form'

import { Button } from 'ui'

import * as S from './Counter.styled'

import MinusIcon from 'public/icons/minus-1.svg'
import PlusIcon from 'public/icons/plus-3.svg'

interface CounterProps {
  name: string
  defaultValue?: number
  onIncrement: (value: number) => void
  onDecrement: (value: number) => void
}

export const Counter = ({ name, defaultValue, onDecrement, onIncrement }: CounterProps) => {
  const { control, setValue } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <S.Counter>
            <Button
              variant="text"
              onClick={() => {
                if (field.value === 0) return

                setValue(name, field.value - 1)
                onDecrement(field.value - 1)
              }}
            >
              <MinusIcon />
            </Button>

            <input type="number" {...field} />

            <Button
              variant="text"
              onClick={() => {
                setValue(name, field.value + 1)
                onIncrement(field.value + 1)
              }}
            >
              <PlusIcon />
            </Button>
          </S.Counter>
        )
      }}
    />
  )
}
