import { GetServerSidePropsContext } from 'next'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'

import WishList, { WishListTemplateProps } from 'templates/WishList'
import gamesMock from 'components/GameCardSlider/mock'

import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import protectedRoutes from 'utils/protected-routes'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export default function WishListPage(props: WishListTemplateProps) {
  return <WishList {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const apolloClient = initializeApollo()

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session?.user.email as string
    }
  })

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initializeApollo: apolloClient.cache.extract(),
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedTitle: data.recommended?.section?.title,
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      games: gamesMock
    }
  }
}
