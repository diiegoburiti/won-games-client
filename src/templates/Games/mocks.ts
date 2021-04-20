import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Seven: The Days Long Gone Demo',
          slug: 'seven-the-days-long-gone-demo',
          price: 0,
          developers: [{ name: 'Fool is Theory' }],
          cover: {
            url: 'seven_the_days_long_gone_demo_81c3253ec9.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 15 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Whateverland',
          slug: 'whateverland',
          price: 554.99,
          developers: [{ name: 'Caligari Games' }],
          cover: {
            url: 'whateverland_a69940e6c9.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}
