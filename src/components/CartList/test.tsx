import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

import CartList from '.'
import theme from 'styles/theme'

describe('<CartList />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: `${theme.colors.primary}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })
})
