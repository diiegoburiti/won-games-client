import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  gamesCard?: GameCardProps[]
  color?: 'black' | 'white'
}

const ShowCase = ({
  title,
  highlight,
  gamesCard,
  color = 'white'
}: ShowCaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!gamesCard && <GameCardSlider items={gamesCard} color={color} />}
  </S.Wrapper>
)

export default ShowCase
