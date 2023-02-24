import { useContext } from 'react'

import { UserContext } from 'providers'

export const useUser = () => useContext(UserContext)
