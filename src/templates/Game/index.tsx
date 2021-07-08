import React from 'react'
import Image from 'next/image'
import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import { Divider } from 'components/Divider'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  description: string
  upcomingHighlight: HighlightProps
  gallery?: GalleryImageProps[]
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedTitle: string
  upcomingTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingHighlight,
  upcomingGames,
  recommendedGames,
  recommendedTitle,
  upcomingTitle
}: GameTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src={cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>

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
        <Divider />
      </S.SectionGameDetails>

      <ShowCase
        title={upcomingTitle}
        gamesCard={upcomingGames}
        highlight={upcomingHighlight}
      />

      <ShowCase title={recommendedTitle} gamesCard={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
