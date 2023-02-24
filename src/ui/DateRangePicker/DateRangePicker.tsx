import { Controller, useFormContext } from 'react-hook-form'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as S from './DateRangePicker.styled'

import CalendarIcon from 'public/icons/calendar.svg'
import CrossIcon from 'public/icons/cross.svg'

import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)

export const DateRangePicker = () => {
  const { control, resetField } = useFormContext()

  return (
    <Controller
      control={control}
      name="dates"
      render={({ field }) => {
        const value = field.value || []
        const isDateFilled = value.every((date: Date | null) => Boolean(date)) && value.length === 2

        return (
          <S.DateRangePicker>
            <CalendarIcon />

            <DatePicker
              selectsRange
              disabledKeyboardNavigation
              startDate={value[0]}
              endDate={value[1]}
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Выберите даты"
              onChange={(date) => field.onChange(date)}
              locale="ru"
            />

            {isDateFilled && (
              <S.ResetButton
                onClick={() => {
                  resetField('dates')
                }}
              >
                <CrossIcon />
              </S.ResetButton>
            )}
          </S.DateRangePicker>
        )
      }}
    />
  )
}
