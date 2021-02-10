import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alingment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subTitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alingment = 'right'
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alingment={alingment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
