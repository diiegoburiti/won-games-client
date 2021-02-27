import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckBoxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default CheckBox
