import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  errorMessage,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }
  return (
    <S.Wrapper disabled={disabled} errorMessage={!!errorMessage}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

export default TextField
