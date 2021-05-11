import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import CartList from '.'
import theme from 'styles/theme'
import { CartContextDefaultValues } from 'hooks/use-cart'
import items from './mock'

describe('<CartList />', () => {
  it('should render the heading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 330,00'
    }

    const { container } = render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toHaveStyle({
      color: `${theme.colors.primary}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }

    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/totla/i)).not.toBeInTheDocument()
  })
})
