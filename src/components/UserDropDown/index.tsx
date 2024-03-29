import Link from 'next/link'
import { signOut } from 'next-auth/client'
import DropDown from 'components/DropDown'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import * as S from './styles'

export type UserDropdownProps = {
  userName: string
}

const UserDropDown = ({ userName }: UserDropdownProps) => (
  <DropDown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{userName}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle />
          <span>My Profile</span>
        </S.Link>
      </Link>
      <Link href="/wishlist" passHref>
        <S.Link title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <S.Link title="Sign out" role="button" onClick={() => signOut()}>
        <ExitToApp />
        <span>Sign Out</span>
      </S.Link>
    </S.Nav>
  </DropDown>
)

export default UserDropDown
