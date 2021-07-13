import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'secondary',
  ribbonSize = 'small'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href-={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
