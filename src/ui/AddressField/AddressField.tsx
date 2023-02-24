import { useState, useMemo, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { YMaps, Map, YMapsApi, Placemark } from 'react-yandex-maps'

import { TextField, Skeleton } from 'ui'

import * as S from './AddressField.styled'

import markerImg from 'public/img/marker.png'

interface Coords {
  lat: number
  lng: number
}

interface AddressFieldProps {
  namePrefix?: string
  coords?: Coords
  readOnly?: boolean
  defaultCoords?: Coords
  disableMap?: boolean
  onCoordsChange?: (coords: Coords) => void
}

export const AddressField = ({
  namePrefix,
  coords,
  readOnly = false,
  defaultCoords = {
    lat: 55.751574,
    lng: 37.573856
  },
  onCoordsChange,
  disableMap = false
}: AddressFieldProps) => {
  const { setValue } = useFormContext()

  const [isMapLoading, setMapLoading] = useState(true)

  const [ymaps, setYmaps] = useState<YMapsApi | null>(null)

  const fieldNameWithPrefix = (name: string, prefix?: string) => {
    if (prefix) {
      return `${prefix}.${name}`
    }

    return name
  }

  const latFieldName = fieldNameWithPrefix('lat', namePrefix)
  const lngFieldName = fieldNameWithPrefix('lng', namePrefix)
  const cityFieldName = fieldNameWithPrefix('city', namePrefix)
  const addressFieldName = fieldNameWithPrefix('address', namePrefix)

  const loadSuggest = (ymaps: YMapsApi) => {
    if (readOnly) return

    setMapLoading(false)
    setYmaps(ymaps)

    const suggestView = new ymaps.SuggestView('suggest')

    suggestView.events.add('select', (e: any) => {
      const selectedAddress = e.get('item').value
      setValue(addressFieldName, selectedAddress)

      new ymaps.geocode(selectedAddress).then((res: any) => {
        const [lat, lng] = res.geoObjects.get(0).geometry.getCoordinates()

        const city = res.geoObjects
          .get(0)
          .properties.get('metaDataProperty')
          .GeocoderMetaData.Address.Components.find(({ kind }: any) => kind === 'locality').name

        setValue(latFieldName, lat)
        setValue(lngFieldName, lng)
        setValue(cityFieldName, city)

        if (onCoordsChange) {
          onCoordsChange({ lat, lng })
        }
      })
    })
  }

  const onMapClick = (e: any) => {
    const coords = e.get('coords')
    const [lat, lng] = coords

    setValue(latFieldName, lat)
    setValue(lngFieldName, lng)

    if (onCoordsChange) {
      onCoordsChange({ lat, lng })
    }

    if (ymaps) {
      new ymaps.geocode(coords).then(({ geoObjects }: any) => {
        const city = geoObjects
          .get(0)
          .properties.get('metaDataProperty')
          .GeocoderMetaData.Address.Components.find(({ kind }: any) => kind === 'locality').name

        const { properties } = geoObjects.get(0)
        const foundAddress = properties.get('text')
        setValue(addressFieldName, foundAddress)
        setValue(cityFieldName, city)
      })
    }
  }

  return (
    <S.AddressField>
      <YMaps query={{ apikey: '2e897e10-0e8f-4974-841d-93edb806dc0d' }}>
        <TextField
          name={addressFieldName}
          id="suggest"
          label="Адрес"
          defaultValue="Россия, Москва"
          InputProps={{
            readOnly
          }}
        />

        <TextField
          name={latFieldName}
          type="hidden"
          style={{ display: 'none' }}
          rules={{ required: false }}
          defaultValue={defaultCoords.lat}
        />

        <TextField
          name={lngFieldName}
          type="hidden"
          style={{ display: 'none' }}
          rules={{ required: false }}
          defaultValue={defaultCoords.lng}
        />

        <TextField
          name={cityFieldName}
          type="hidden"
          style={{ display: 'none' }}
          rules={{ required: false }}
        />

        <S.Map hidden={disableMap}>
          <Map
            state={{
              defaultOptions: { suppressMapOpenBlock: true },
              zoom: 9,
              center: coords ? [coords.lat, coords.lng] : []
            }}
            width="100%"
            height={150}
            modules={['geocode', 'SuggestView']}
            defaultState={{ center: [defaultCoords.lat, defaultCoords.lng], zoom: 9 }}
            onLoad={loadSuggest}
            onClick={onMapClick}
          >
            {useMemo(
              () => (
                <Placemark
                  geometry={coords ? [coords.lat, coords.lng] : []}
                  options={{
                    cursor: 'default',
                    iconLayout: 'default#image',
                    iconImageHref: markerImg.src,
                    iconImageSize: [48, 48]
                  }}
                />
              ),
              [coords]
            )}
          </Map>

          {isMapLoading && <Skeleton height={150} />}
        </S.Map>
      </YMaps>
    </S.AddressField>
  )
}
