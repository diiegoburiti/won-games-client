import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My game title',
  description: 'Game description',
  price: 199
}

describe('<GameInfo />', () => {
  it('should render the <GameInfo />', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(`$${props.price}.00`)).toBeInTheDocument()
    expect(screen.getByText(/Game description/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Add to card/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })

  it('should render Free is prince is equal 0', () => {
    renderWithTheme(<GameInfo {...props} price={0} />)

    expect(screen.getByText(/Free/i)).toBeInTheDocument()
  })
})
