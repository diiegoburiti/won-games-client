import Joi from 'joi'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErros(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

type signInValues = Omit<UsersPermissionsRegisterInput, 'username'>

export function signInValidate(values: signInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })
  const fieldErros = schema.validate(values, { abortEarly: false })
  return getFieldErros(fieldErros)
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)
  const fieldErros = schema.validate(values, { abortEarly: false })
  return getFieldErros(fieldErros)
}
