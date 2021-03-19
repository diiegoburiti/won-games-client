import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

export type WishListTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
}
const WishList = ({
  recommendedGames,
  recommendedHighlight,
  games
}: WishListTemplateProps) => (
  <Base>
    <Container>
      <Heading lineColor="secondary" lineLeft>
        WishList
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>
    <ShowCase
      gamesCard={recommendedGames}
      highlight={recommendedHighlight}
      title="you may like these games"
    />
  </Base>
)

export default WishList
