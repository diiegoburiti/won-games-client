import { screen } from '@testing-library/react'
import paymentMock from './mock'

import PaymentOptions from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <PaymentOptions cards={paymentMock} handlePayment={jest.fn} />
    )

    expect(
      screen.getByRole('heading', { name: /Payment/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /mastercard/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add a new credit card/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
