import { useContext } from 'react'

import { AuthContext } from 'providers'

export const useAuth = () => {
  return useContext(AuthContext)
}
