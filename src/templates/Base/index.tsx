import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'
import { Container } from 'components/Container'
import { useSession } from 'next-auth/client'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const [session] = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu userName={session?.user?.name} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
