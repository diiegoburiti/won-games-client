import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render with label', () => {
    renderWithTheme(<CheckBox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/check/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<CheckBox />)

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <CheckBox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="checkbox" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should render with Checkbox checked when isChecked is passed', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="checkbox" onCheck={onCheck} isChecked />)
    //expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))

    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
