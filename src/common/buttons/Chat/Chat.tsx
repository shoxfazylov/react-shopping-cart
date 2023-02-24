import * as S from './Chat.styled'

import ChatIcon from 'public/icons/chat-3.svg'

export const ChatButton = (props: any) => {
  return (
    <S.ChatButton {...props}>
      <ChatIcon />
    </S.ChatButton>
  )
}
