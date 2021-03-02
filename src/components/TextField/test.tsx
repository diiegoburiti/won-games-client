import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <TextField label="E-mail" labelFor="email" />
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText(/e-mail/i)).toHaveAttribute('for', 'email')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('textbox')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    const placehoolder = 'admin@gmail.com'

    renderWithTheme(<TextField placeholder={placehoolder} />)

    expect(screen.getByPlaceholderText(placehoolder)).toBeInTheDocument()
  })

  it('changes it`s values when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'this is the new input value'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
    //expect(screen.getByPlaceholderText(placehoolder)).toBeInTheDocument()
  })

  it('should be accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should with icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should with icon on the right side', () => {
    renderWithTheme(
      <TextField iconPosition="right" icon={<Email data-testid="icon" />} />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({ order: 1 })
  })
})
