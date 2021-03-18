import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import * as S from './styles'
import React from 'react'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  description: string
  upcomingHighlight: HighlightProps
  gallery?: GalleryImageProps[]
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingHighlight,
  upcomingGames,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <ShowCase
        title="Upcomming"
        gamesCard={upcomingGames}
        highlight={upcomingHighlight}
      />

      <ShowCase title="You may like these games" gamesCard={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
