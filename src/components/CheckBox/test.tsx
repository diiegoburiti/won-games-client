import { screen } from '@testing-library/react'
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

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })
})
