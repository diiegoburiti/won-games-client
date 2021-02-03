import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column aria-labelledby="footer contacts">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>
        <a href="#">loremIpsum@gmail.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow Us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopeneer, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopeneer, noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopeneer, noreferrer">
            Youtube
          </a>
          <a href="#" target="_blank" rel="noopeneer, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum dolor.</span>
        <span>Lorem ipsum dolor sit amet.</span>
      </S.Column>
    </S.Content>
    <S.CopyRight>Won Games 2020 🄯 All rights reserved.</S.CopyRight>
  </S.Wrapper>
)

export default Footer
