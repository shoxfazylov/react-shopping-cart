import { FormProvider, useForm } from 'react-hook-form'

import { HeaderTop, HeaderBottom } from './components'

import { ROUTE_NAMES } from 'core'
import { NavItem } from './Header.types'

import * as S from './Header.styled'

export const Header = () => {
  const useFormProps = useForm()

  const nav: NavItem[] = [
    { label: 'Car oils', link: '/' },
    { label: 'Original spare parts', link: '/' },
    { label: 'Non-original spare parts', link: '/' },
    { label: 'Autolamps', link: '/' },
    { label: 'Wheels', link: '/' },
    { label: 'Accumulator', link: '/' },
    { label: 'Contacts', link: '/' },
  ]

  return (
    <FormProvider {...useFormProps}>
      <S.Header>
        <HeaderTop nav={nav} />
        <HeaderBottom nav={nav} />
      </S.Header>
    </FormProvider>
  )
}
