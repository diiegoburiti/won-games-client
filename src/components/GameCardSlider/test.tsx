import 'match-media-mock'
import { screen } from '@testing-library/react'

import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render GameCardSlider with 5 items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
  })

  it('should render arrow left and right', () => {
    renderWithTheme(<GameCardSlider items={items} />)

    expect(screen.getByLabelText(/previous games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next games/i)).toBeInTheDocument()
  })

  it('should render white or black when color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="black" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
