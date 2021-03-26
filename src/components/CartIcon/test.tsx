import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badger', () => {
    const { container } = renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with badger', () => {
    renderWithTheme(<CartIcon quantity={2} />)

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/2/)).toBeInTheDocument()
  })

  it('should render with badger only if has positive number', () => {
    renderWithTheme(<CartIcon quantity={-2} />)

    expect(screen.queryByText(/-2/)).not.toBeInTheDocument()
  })
})
