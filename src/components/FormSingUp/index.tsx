import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import TextField from 'components/TextField'
import Button from 'components/Button'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form aria-label="sing-up form">
      <TextField
        name="name"
        placeholder="name"
        type="text"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sing Up Now
      </Button>

      <S.FormLink>
        Already have an account?
        <Link href="/sign-ip">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn