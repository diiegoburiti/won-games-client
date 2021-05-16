import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import { render } from 'utils/test-utils'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    const { container } = render(<TextField label="E-mail" name="email" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText(/e-mail/i)).toHaveAttribute('for', 'email')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText('textbox')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    const placehoolder = 'admin@gmail.com'

    render(<TextField placeholder={placehoolder} />)

    expect(screen.getByPlaceholderText(placehoolder)).toBeInTheDocument()
  })

  it('changes it`s values when typing', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'this is the new input value'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
    //expect(screen.getByPlaceholderText(placehoolder)).toBeInTheDocument()
  })

  it('should be accessible by tab', () => {
    render(<TextField label="TextField" name="TextField" id="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should with icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should with icon on the right side', () => {
    render(
      <TextField iconPosition="right" icon={<Email data-testid="icon" />} />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({ order: 1 })
  })

  it('Does not changes value when disabled is passed', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'this is the new input value'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
      expect(onInputChange).not.toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).not.toHaveBeenCalledWith(text)
  })

  it('does not be accessible by tab when disabled is passed', () => {
    render(
      <TextField label="TextField" name="TextField" id="TextField" disabled />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should display error message', () => {
    const { container } = render(
      <TextField
        label="TextField"
        name="TextField"
        id="TextField"
        errorMessage="email already registered"
        icon={<Email data-testid="icon" />}
      />
    )

    expect(screen.getByText(/email already registered/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
