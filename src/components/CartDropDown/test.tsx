import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CartDropDown from '.'

describe('<CartDrowDown />', () => {
  it('should render the content correctly', () => {
    const { container } = render(
      <CartDropDown total="R$ 300,00" items={items} />
    )

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render DropDown content with cart items and total', () => {
    render(<CartDropDown items={items} total="R$ 300,00" />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
