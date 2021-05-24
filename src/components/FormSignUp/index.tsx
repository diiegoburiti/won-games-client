import React, { useState } from 'react'
import Link from 'next/link'
import { signin } from 'next-auth/client'
import { useMutation } from '@apollo/client'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    password: '',
    username: ''
  })

  const [createrUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signin('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  function handleInputChange(field: string, value: string) {
    setValues((oldState) => ({ ...oldState, [field]: value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createrUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form aria-label="sing-up form" onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          errorMessage={fieldError?.username}
          icon={<AccountCircle />}
          onInputChange={(value) => handleInputChange('username', value)}
        />
        <TextField
          name="email"
          placeholder="email"
          type="email"
          errorMessage={fieldError?.email}
          icon={<Email />}
          onInputChange={(value) => handleInputChange('email', value)}
        />
        <TextField
          name="password"
          placeholder="password"
          type="password"
          errorMessage={fieldError?.password}
          icon={<Lock />}
          onInputChange={(value) => handleInputChange('password', value)}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          errorMessage={fieldError?.confirm_password}
          icon={<Lock />}
          onInputChange={(value) =>
            handleInputChange('confirm_password', value)
          }
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
