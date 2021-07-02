import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

import {
  bannerMapper,
  cartMapper,
  gamesMapper,
  highlightMapper,
  ordersMapper
} from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'banner title',
      subtitle: 'banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        buttonLabel: 'button label',
        buttonLink: 'button link',
        img: 'http://localhost:1337/image.jpg',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small',
        subtitle: 'banner subtitle',
        title: 'banner title'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper([])).toStrictEqual([])
  })

  it('should return correctly format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'rockstart'
        }
      ],
      slug: 'game',
      cover: {
        url: '/cover.jpg'
      },
      price: 10
    } as QueryGames_games
    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'rockstart',
        img: 'http://localhost:1337/cover.jpg',
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return correctly format when mapped', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: '/background.jpg'
      },
      floatImage: {
        url: '/float.jpg'
      },
      buttonLabel: 'buy now',
      buttonLink: 'localhost:3000',
      alignment: 'left'
    } as QueryHome_sections_freeGames_highlight
    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subTitle: 'subtitle',
      backgroundImage: 'http://localhost:1337/background.jpg',
      floatImage: 'http://localhost:1337/float.jpg',
      buttonLabel: 'buy now',
      buttonLink: 'localhost:3000',
      alignment: 'left'
    })
  })
})

describe('cartMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return correctly format when mapped', () => {
    const game = {
      id: '1',
      name: 'Sample Game',
      price: 10.5,
      cover: {
        url: '/sample-game.jpg'
      }
    } as QueryGames_games
    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Sample Game',
        img: 'http://localhost:1337/sample-game.jpg',
        price: '$10.50'
      }
    ])
  })
})

describe('ordersMapper()', () => {
  it('should return an empty array if there are no orders', () => {
    expect(ordersMapper(undefined)).toStrictEqual([])
  })
  it('should return mapped items', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 10
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00'
          }
        ]
      }
    ])
  })

  it('should return free game when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 0
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: 'Free'
          }
        ]
      }
    ])
  })
})
