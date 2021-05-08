import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badger', () => {
    const { container } = render(<CartIcon />)

    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with badger', () => {
    render(<CartIcon quantity={2} />)

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/2/)).toBeInTheDocument()
  })

  it('should render with badger only if has positive number', () => {
    render(<CartIcon quantity={-2} />)

    expect(screen.queryByText(/-2/)).not.toBeInTheDocument()
  })
})
