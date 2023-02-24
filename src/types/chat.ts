export interface Message {
  id: number
  chatId: number
  senderId: number | null
  receiverId: number | null
  dateTime: string
  message: string
  isRead: boolean
  file: string | null
}

export interface Chat {
  id: number
  orderId: number
  title: string
  isActive: boolean
  unreadMessNumber: number
  messages: Message[]
}
