import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import mockItems from './mock'

import CartList from '.'
import theme from 'styles/theme'

describe('<CartList />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <CartList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: `${theme.colors.primary}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/totla/i)).not.toBeInTheDocument()
  })
})
