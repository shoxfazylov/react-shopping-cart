import { useState } from 'react'

import * as S from './LocationChoose.styled'

import LocationIcon from 'public/icons/location.svg'

export const LocationChoose = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const city = 'San Francisco'

  return (
    <S.LocationChoose>
      <S.CurrentLocation
        onClick={() => {
          setModalOpen(true)
        }}
      >
        <LocationIcon />

        <span>{city}</span>
      </S.CurrentLocation>

      <S.ChooseCityModal
        open={isModalOpen}
        onClose={() => {
          setModalOpen(false)
        }}
      >
        <div></div>
      </S.ChooseCityModal>
    </S.LocationChoose>
  )
}
