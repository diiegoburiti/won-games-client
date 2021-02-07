import { screen } from '@testing-library/react'
import { renderWithTheme } from 'components/utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the ribbon', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  /* it('should render with primary color', () => {
    renderWithTheme(<Ribbon color="primary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  }) */
})
