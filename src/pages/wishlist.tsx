import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'

import WishList, { WishListTemplateProps } from 'templates/WishList'
import gamesMock from 'components/GameCardSlider/mock'

import { gamesMapper, highlightMapper } from 'utils/mappers/mappers'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

export default function WishListPage(props: WishListTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedTitle: data.recommended?.section?.title,
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      games: gamesMock
    }
  }
}
