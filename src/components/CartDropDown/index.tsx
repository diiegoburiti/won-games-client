import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import DropDown from 'components/DropDown'
import { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartDropDownProps = {
  total: string
  items: GameItemProps[]
}

const CartDropDown = ({ items, total }: CartDropDownProps) => (
  <S.Wrapper>
    <DropDown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </DropDown>
  </S.Wrapper>
)

export default CartDropDown
