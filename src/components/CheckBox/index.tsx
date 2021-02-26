import * as S from './styles'

export type CheckBoxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

const CheckBox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckBoxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default CheckBox
