import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGamesTitle,
  mostPopularGames,
  upcomingGames,
  upcomingGamesTitle,
  upcomingHighlight,
  freeGamesTitle,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title={newGamesTitle} gamesCard={newGames} color="black" />
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <ShowCase
          title={mostPopularGamesTitle}
          highlight={mostPopularHighlight}
          gamesCard={mostPopularGames}
        />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <ShowCase
          title={upcomingGamesTitle}
          gamesCard={upcomingGames}
          highlight={upcomingHighlight}
        />

        {/* <ShowCase
          gamesCard={upcommingMoreGames}
          highlight={upcomingHighlight}
        /> */}
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <ShowCase
          title={freeGamesTitle}
          highlight={freeHighlight}
          gamesCard={freeGames}
        />
      </S.SectionFreeGames>
    </Container>
  </Base>
)

export default Home
