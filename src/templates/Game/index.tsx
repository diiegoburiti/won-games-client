import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
}

const Game = ({ cover }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
  </Base>
)

export default Game
