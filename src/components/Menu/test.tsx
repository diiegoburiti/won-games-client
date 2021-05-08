import { fireEvent, screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // check if menu id hidden
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // check if onClick the button is open
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // check if onClick the button is closed
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logger is out', () => {
    render(<Menu />)

    expect(screen.queryByText(/my acccount/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()

    expect(screen.getAllByText(/Sign In/i)).toHaveLength(2)
    expect(screen.getByText(/sign Up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logger in', () => {
    render(<Menu userName="admin123" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)

    expect(screen.queryByText(/Sign In/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign Up/i)).not.toBeInTheDocument()
  })
})
