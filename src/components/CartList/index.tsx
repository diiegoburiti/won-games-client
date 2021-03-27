import Link from 'next/link'
import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'

import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>

      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy Now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
