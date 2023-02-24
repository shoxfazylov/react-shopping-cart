import { useForm, FormProvider } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Select, Button, Skeleton } from 'ui'

import { ROUTE_NAMES } from 'core'
import { catalogsAPI } from 'api'
import { CarBrand } from 'types/catalogs'

import * as S from './CarSelectParams.styled'

interface CarSelectParamsModalProps {
  open: boolean
  brands: CarBrand[]
  defaultBrand: CarBrand
  onClose: () => void
}

export const CarSelectParamsModal = ({
  open,
  brands,
  defaultBrand,
  onClose
}: CarSelectParamsModalProps) => {
  const router = useRouter()
  const useFormProps = useForm()
  const { handleSubmit, reset, watch, getValues } = useFormProps

  const [selectedSsd, setSelectedSsd] = useState('')

  const brandCode = watch('brand')

  const { data: searchOptions, isLoading: isSearchOptionsLoading } = useQuery(
    ['search-options', brandCode, selectedSsd],
    () => catalogsAPI.getCarSearchOptions({ brandCode, ssd: selectedSsd }),
    {
      enabled: !!brandCode
    }
  )

  console.log('search-options', searchOptions)

  useEffect(() => {
    reset({
      brand: defaultBrand.code
    })
  }, [defaultBrand])

  useEffect(() => {
    if (!searchOptions) return

    const defaultValues = searchOptions
      .filter(({ value }) => value)
      .reduce((prev, { name, value }) => ({ ...prev, [name]: value }), {})

    reset({ ...getValues(), ...defaultValues })
  }, [searchOptions])

  const onSearchOptionsSubmit = () => {
    router.push({
      pathname: ROUTE_NAMES.ORIGINAL_SPARE_PARTS_VEHICLES,
      query: { brandCode, ssd: selectedSsd }
    })
  }

  const brandOptions = brands.map(({ name, code }) => ({ label: name, value: code }))

  const dynamicSelects = searchOptions?.map(({ id, name, value, options }) => {
    if (value) {
      return (
        <Select
          key={id}
          name={name}
          label={name}
          options={[{ label: value, value }]}
          onChange={({ target }) => {
            setSelectedSsd(target.value as string)
          }}
        />
      )
    }

    return (
      <Select
        key={id}
        name={name}
        label={name}
        options={options}
        onChange={({ target }) => {
          setSelectedSsd(target.value as string)
        }}
      />
    )
  })

  return (
    <S.CarSelectParamsModal title="Подбор деталей по параметрам" open={open} onClose={onClose}>
      <FormProvider {...useFormProps}>
        {!isSearchOptionsLoading ? (
          <S.Form onSubmit={handleSubmit(onSearchOptionsSubmit)}>
            <Select
              name="brand"
              label="Марка"
              options={brandOptions}
              onChange={({ target }) => {
                setSelectedSsd('')
                reset({
                  brand: target.value
                })
              }}
            />

            {dynamicSelects}

            <Button type="submit">Найти автомобиль</Button>
          </S.Form>
        ) : (
          <S.SkeletonGrid>
            <Skeleton height={48} count={5} />
          </S.SkeletonGrid>
        )}
      </FormProvider>
    </S.CarSelectParamsModal>
  )
}
