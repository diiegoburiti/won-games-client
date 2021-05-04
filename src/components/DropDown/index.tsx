import { useState } from 'react'
import * as S from './styles'

export type DropDownProps = {
  title: React.ReactNode
  children: React.ReactNode
}
const DropDown = ({ title, children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDropDown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={handleOpenDropDown}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={handleOpenDropDown} />
    </S.Wrapper>
  )
}

export default DropDown
