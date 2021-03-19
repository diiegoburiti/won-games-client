import WishList, { WishListTemplateProps } from 'templates/WishList'
import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

export default function WishListPage(props: WishListTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: HighlightMock,
      games: gamesMock
    }
  }
}
