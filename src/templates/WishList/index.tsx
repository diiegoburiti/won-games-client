import { useWishlist } from 'hooks/use-wishlist'
import Base from 'templates/Base'
import Loader from 'components/Loader'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import * as S from './styles'

export type WishListTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
  recommendedTitle: string
}
const WishList = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: WishListTemplateProps) => {
  const { loading, items } = useWishlist()

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}
        <Divider />
      </Container>

      <ShowCase
        gamesCard={recommendedGames}
        highlight={recommendedHighlight}
        title={recommendedTitle}
      />
    </Base>
  )
}

export default WishList
