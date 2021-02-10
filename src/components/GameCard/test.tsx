import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
// rendercard
// render title
// render developer
// render img
// render price

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 250.00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(container.firstChild).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/300x140'
    )

    const price = screen.getByText(/250.00/i)
    expect(price).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
