import { useEffect } from 'react'
import Link from 'next/link'
import { Done } from '@styled-icons/material-outlined/Done'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/ShowCase'
import { HighlightProps } from 'components/Highlight'
import { useCart } from 'hooks/use-cart'
import * as S from './styles'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            . Enjoy!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        gamesCard={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Success
