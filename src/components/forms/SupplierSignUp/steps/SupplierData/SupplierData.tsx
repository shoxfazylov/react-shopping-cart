import React, { useState } from 'react'
import { useQuery } from 'react-query'
import InputAdornment from '@mui/material/InputAdornment'

import { Select, Autocomplete } from 'ui'

import { constantsAPI } from 'api'

import SignRightIcon from 'public/icons/arrows/sign-right.svg'
import CrossIcon from 'public/icons/cross.svg'

import * as S from './SupplierData.styled'

interface Brand {
  id: number
  name: string
  code: string
  icon: string
  slug: string
}

interface Category {
  id: number
  title: string
}

export const SupplierDataStep = () => {
  const [brandsPage, setBrandsPage] = useState(1)
  const [brandsAll, setBrandsAll] = useState<Brand[]>([])

  const [categoriesPage, setCategoriesPage] = useState(1)
  const [categoriesAll, setCategoriesAll] = useState<Category[]>([])

  const { isLoading: areBrandsLoading } = useQuery(
    ['brands', brandsPage],
    () => constantsAPI.getBrands(brandsPage),
    {
      onSuccess: ({ next, results }) => {
        setBrandsAll([...brandsAll, ...results])

        if (next) {
          setBrandsPage(brandsPage + 1)
        }
      }
    }
  )

  const { isLoading: areCategoriesLoading } = useQuery(
    ['categories', categoriesPage],
    () => constantsAPI.getCategories(categoriesPage),
    {
      onSuccess: ({ next, results }) => {
        setCategoriesAll([...categoriesAll, ...results])

        if (next) {
          setCategoriesPage(categoriesPage + 1)
        }
      }
    }
  )

  const warehousesAvailable = [
    { label: 'В наличие', value: 'available' },
    { label: 'Отсутствует', value: 'not-available' }
  ]

  const ChipProps = {
    deleteIcon: <CrossIcon />
  }

  return (
    <>
      <S.MultipleAutocomplete>
        <Autocomplete
          multiple
          filterSelectedOptions
          disableCloseOnSelect
          name="supplier.categories"
          loading={areCategoriesLoading}
          options={categoriesAll}
          ChipProps={ChipProps}
          getOptionLabel={(category) => {
            if (typeof category !== 'string') {
              return category.title
            }

            return ''
          }}
          renderInput={(props) => (
            <S.TextField
              {...props}
              label="Продукция"
              placeholder="Выберите продукцию"
              InputProps={{
                ...props.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SignRightIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
        />
      </S.MultipleAutocomplete>

      <S.MultipleAutocomplete>
        <Autocomplete
          multiple
          filterSelectedOptions
          disableCloseOnSelect
          name="supplier.brands"
          loading={areBrandsLoading}
          options={brandsAll}
          getOptionLabel={(brand) => {
            if (typeof brand !== 'string') {
              return brand.name
            }

            return ''
          }}
          ChipProps={ChipProps}
          renderInput={(props) => (
            <S.TextField
              {...props}
              label="Бренд"
              placeholder="Бренд"
              InputProps={{
                ...props.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SignRightIcon />
                  </InputAdornment>
                )
              }}
            />
          )}
        />
      </S.MultipleAutocomplete>

      <Select
        name="supplier.warehouseAvailable"
        label="Наличие на складах"
        options={warehousesAvailable}
      />
    </>
  )
}
