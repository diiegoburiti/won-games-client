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
      <S.BannerContent>
        <Logo id="banner" />
        <div>
          <Heading size="huge">All your favorite game in one place</Heading>
          <S.SubTitle>
            <strong>Won</strong> is the best and most complete gaming plataform
          </S.SubTitle>
        </div>

        <S.Footer>
          Won Games 2020 - {new Date().getFullYear()} © All rights reserved.
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo id="content" size="large" color="black" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
