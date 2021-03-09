import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import ShowCase from 'components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" gamesCard={newGames} />
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <ShowCase
          title="Most Popular"
          highlight={mostPopularHighlight}
          gamesCard={mostPopularGames}
        />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <ShowCase title="Upcomming" gamesCard={upcommingGames} />

        <ShowCase
          gamesCard={upcommingMoreGames}
          highlight={upcommingHighlight}
        />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <ShowCase
          title="Free games"
          highlight={freeHighlight}
          gamesCard={freeGames}
        />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
