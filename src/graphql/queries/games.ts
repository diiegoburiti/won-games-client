import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      slug
      name
      cover {
        url
        id
      }
      developers {
        name
      }
      price
    }
  }
`
