import { useState } from 'react'

import { useFormContext } from 'react-hook-form'

import { TextField, PhoneField, EmailField, ImagesDropzone, Button, AddressField } from 'ui'

import { ImageFile } from 'types/common'
import { FormFields } from 'types/SupplierSignUp'

import * as S from './Shopes.styled'

interface Coords {
  lat: number
  lng: number
}

interface ShopesStepProps {
  shopImages: ImageFile[]
  onShopImagesChange: (files: ImageFile[]) => void
}

export const ShopesStep = ({ shopImages, onShopImagesChange }: ShopesStepProps) => {
  const { reset, getValues } = useFormContext<FormFields>()

  const defaultCoords: Coords = {
    lat: 55.751574,
    lng: 37.573856
  }

  const [coords, setCoords] = useState<Coords>(defaultCoords)

  const resetFields = () => {
    reset({
      ...getValues(),
      shopes: {
        name: '',
        address: '',
        city: '',
        lat: coords.lat,
        lng: coords.lng,
        phone: '',
        email: '',
        howToFindUs: ''
      }
    })
    setCoords(defaultCoords)
    onShopImagesChange([])
  }

  return (
    <S.ShopesStep>
      <TextField name="shopes.name" label="Название" />

      <AddressField
        namePrefix="shopes"
        coords={coords}
        defaultCoords={defaultCoords}
        onCoordsChange={setCoords}
      />

      <PhoneField name="shopes.phone" />
      <EmailField name="shopes.email" />
      <TextField
        name="shopes.howToFindUs"
        label='Описание "Как нас найти"'
        rules={{ required: false }}
      />

      <ImagesDropzone images={shopImages} onChange={onShopImagesChange} />

      <S.ButtonsRow>
        <Button type="submit">Сохранить</Button>

        <Button variant="outlined" onClick={resetFields}>
          Добавить ещё магазин
        </Button>
      </S.ButtonsRow>
    </S.ShopesStep>
  )
}
