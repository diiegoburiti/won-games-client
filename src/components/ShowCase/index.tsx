import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  gamesCard?: GameCardProps[]
}

const ShowCase = ({ title, highlight, gamesCard }: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!gamesCard && <GameCardSlider items={gamesCard} />}
  </S.Wrapper>
)

export default ShowCase
