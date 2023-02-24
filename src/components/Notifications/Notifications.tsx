import { ToastContainer } from 'react-toastify'

import * as S from './Notifications.styled'

import 'react-toastify/dist/ReactToastify.css'

export const Notifications = () => {
  return (
    <S.Notifications>
      <ToastContainer position="bottom-right" />
    </S.Notifications>
  )
}
