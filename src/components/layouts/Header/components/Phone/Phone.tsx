import * as S from './Phone.styled'

import PhoneIcon from 'public/icons/phone.svg'

export const Phone = () => {
  return (
    <S.Phone href="tel:7000000000">
      <PhoneIcon />

      <span>+ 7 (000) 000-00-00</span>
    </S.Phone>
  )
}
