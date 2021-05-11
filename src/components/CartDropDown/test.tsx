import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CartDropDown from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'

describe('<CartDrowDown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 100,00'
    }

    render(<CartDropDown />, { cartProviderProps })
  })

  it('should render the content correctly', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })

  it('should render DropDown content with cart items and total', () => {
    render(<CartDropDown />)

    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
