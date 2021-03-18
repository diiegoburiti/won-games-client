import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'
import * as S from './styles'

export type WishListTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}
const WishList = ({
  recommendedGames,
  recommendedHighlight
}: WishListTemplateProps) => (
  <S.Wrapper>
    <Base>
      <Container>
        <Heading lineColor="secondary" lineLeft>
          WishList
        </Heading>
      </Container>
      <ShowCase
        gamesCard={recommendedGames}
        highlight={recommendedHighlight}
        title="you may like these games"
      />
    </Base>
  </S.Wrapper>
)

export default WishList
