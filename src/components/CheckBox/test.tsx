import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { render } from 'utils/test-utils'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render with label', () => {
    render(<CheckBox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/check/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    render(<CheckBox />)

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(
      <CheckBox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    render(<CheckBox label="checkbox" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should render with Checkbox checked when isChecked is passed', async () => {
    const onCheck = jest.fn()

    render(<CheckBox label="checkbox" onCheck={onCheck} isChecked />)
    //expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    render(<CheckBox label="checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/)).toHaveFocus()
  })
})
