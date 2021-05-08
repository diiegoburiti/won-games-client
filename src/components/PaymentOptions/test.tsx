import { screen, waitFor } from '@testing-library/react'
import paymentMock from './mock'

import PaymentOptions from '.'
import { render } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    const { container } = render(
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

  it('should handle select card when clicking on the label', async () => {
    render(<PaymentOptions cards={paymentMock} handlePayment={jest.fn} />)

    userEvent.click(screen.getByRole('radio', { name: /4325/i }))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/i })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions cards={paymentMock} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toBeCalled()
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions cards={paymentMock} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('radio', { name: /4325/i }))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
