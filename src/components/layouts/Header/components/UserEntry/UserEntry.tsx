import Link from 'next/link'

import { Skeleton } from 'ui'

import { useAuth } from 'hooks'
import { ROUTE_NAMES } from 'core'
import { getRoleHomeRoutePath } from 'utils'

import * as S from './UserEntry.styled'

import UserIcon from 'public/icons/user.svg'

export const UserEntry = () => {
  const { isAuth, isAccountLoading, user } = useAuth()
  const role = user?.role?.title

  if (isAccountLoading) {
    return (
      <S.UserEntry>
        <UserIcon />

        <Skeleton width={131.47} height={24} />
      </S.UserEntry>
    )
  }

  return (
    <S.UserEntry>
      <UserIcon />

      {isAuth ? (
        <Link href={getRoleHomeRoutePath(role)} passHref>
          <a>
            <span>Profile</span>
          </a>
        </Link>
      ) : (
        <>
          <Link href={ROUTE_NAMES.SIGN_IN} passHref>
            <a>
              <span>Login</span>
            </a>
          </Link>

          <span>/</span>

          <Link href={ROUTE_NAMES.SIGN_UP} passHref>
            <a>
              <span>Register</span>
            </a>
          </Link>
        </>
      )}
    </S.UserEntry>
  )
}
