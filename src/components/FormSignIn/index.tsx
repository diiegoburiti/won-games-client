import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import TextField from 'components/TextField'
import Button from 'components/Button'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form aria-label="sing-in form">
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
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sing In Now
      </Button>

      <S.FormLink>
        Don’t have an account?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
