import { useState, useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Typography from '@mui/material/Typography'

import { AddressField, TextField, PhoneField, EmailField, Button, ImagesDropzone } from 'ui'

import { ImageFile } from 'types/common'

import * as S from './AddStore.styled'

interface Coords {
  lat: number
  lng: number
}

interface FormFields {
  name: string
  city: string
  address: string
  lat: number
  lng: number
  phone: string
  email: string
  desc?: string
}

interface OnSubmitProps {
  name: string
  city: string
  address: string
  lat: number
  lng: number
  phone: string
  email: string
  desc?: string
  images: ImageFile[]
}

interface StoreModalProps {
  open: boolean
  isChanging: boolean
  onClose: () => void
  onSubmit: (props: OnSubmitProps) => void
}

export const AddStoreModal = ({ open, isChanging, onClose, onSubmit }: StoreModalProps) => {
  const useFormProps = useForm<FormFields>()
  const { handleSubmit, reset } = useFormProps

  const defaultCoords: Coords = useMemo(
    () => ({
      lat: 55.751574,
      lng: 37.573856
    }),
    []
  )

  const [coords, setCoords] = useState<Coords>(defaultCoords)
  const [images, setImages] = useState<ImageFile[]>([])

  useEffect(() => {
    reset()
    setCoords(defaultCoords)
    setImages([])
  }, [open, defaultCoords, reset])

  const onAddStoreSubmit = ({ name, city, address, lat, lng, phone, email, desc }: FormFields) => {
    onSubmit({
      name,
      city,
      address,
      lat,
      lng,
      phone,
      email,
      desc,
      images
    })
  }

  return (
    <S.AddStoreModal
      title="Добавить магазин"
      open={open}
      onClose={() => {
        onClose()
      }}
    >
      <FormProvider {...useFormProps}>
        <S.Form onSubmit={handleSubmit(onAddStoreSubmit)}>
          <TextField name="name" label="Название" />

          <AddressField coords={coords} defaultCoords={defaultCoords} onCoordsChange={setCoords} />

          <PhoneField name="phone" />

          <EmailField name="email" />

          <TextField
            name="desc"
            label="Описание для покупателя"
            placeholder="Описание для покупателя “Как нас найти”"
            rules={{ required: false }}
          />

          <Typography>
            Загрузите изображения (900х500 пикселей, формат jpg). Количество изображений для
            загрузки - 5 шт.
          </Typography>

          <ImagesDropzone images={images} maxFiles={5} onChange={setImages} />

          <Button type="submit" fullWidth loading={isChanging}>
            Добавить магазин
          </Button>
        </S.Form>
      </FormProvider>
    </S.AddStoreModal>
  )
}
