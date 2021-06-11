import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import formatPrice from 'utils/forma-price'
import CartButton from 'components/CartButton'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton size="large" hasText id={id} />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
