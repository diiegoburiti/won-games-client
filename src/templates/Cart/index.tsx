import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import PaymentForm from 'components/PaymentForm'
import CartList, { CartListProps } from 'components/CartList'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <Elements stripe={stripe}>
            <CartList />
            <PaymentForm />
          </Elements>
        </S.Content>

        <Divider />
      </Container>

      <ShowCase
        title={recommendedTitle}
        gamesCard={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
