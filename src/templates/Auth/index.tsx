import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}
const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading>All your favorite game in one place</Heading>
      <S.SubTitle>
        <strong>WOM</strong> is the best and most complete gaming plataform
      </S.SubTitle>

      <S.Footer>
        Won Games 2020 - {new Date().getFullYear()} © All rights reserved.
      </S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo size="large" color="black" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>
      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
