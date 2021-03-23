import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<CardsList />)

    expect(
      screen.getByRole('heading', { name: /My cards/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render cards', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(screen.getByRole('img', { name: /visa/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mastercard/i })).toBeInTheDocument()

    expect(screen.queryByText(/4325/i)).toBeInTheDocument()
    expect(screen.queryByText(/4326/i)).toBeInTheDocument()
  })
})
