import { createContext, ReactNode } from 'react'

import { User } from 'types/account'

interface UserProvider {
  user: User
  children: ReactNode
}

export const UserContext = createContext<User>({} as User)

export function UserProvider({ user, children }: UserProvider): JSX.Element {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
