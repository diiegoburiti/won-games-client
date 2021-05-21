import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Email, Lock } from '@styled-icons/material-outlined'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper, FormLoading } from 'components/Form'
import * as S from './styles'

const FormSignIn = () => {
  const { push } = useRouter()
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState<boolean>(false)

  function handleInputChange(field: string, value: string) {
    setValues((oldState) => ({ ...oldState, [field]: value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result.url) {
      return push(result?.url)
    }

    setLoading(false)
    console.error('email ou senha invalido')
  }

  return (
    <FormWrapper>
      <form aria-label="sing-in form" onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="email"
          type="email"
          icon={<Email />}
          onInputChange={(value) => handleInputChange('email', value)}
        />

        <TextField
          name="password"
          placeholder="password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
