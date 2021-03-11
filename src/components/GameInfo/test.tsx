import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My game title',
  description: 'Game description',
  price: '199.99'
}

describe('<GameInfo />', () => {
  it('should render the <GameInfo />', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/199.99/i)).toBeInTheDocument()
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
})
