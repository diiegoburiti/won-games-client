import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import DropDown from '.'

describe('<DropDown />', () => {
  beforeEach(() => {
    const title = <h5 aria-label="toogle dropdown">Click here</h5>

    const { container } = renderWithTheme(
      <DropDown title={title}>
        <span>content</span>
      </DropDown>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', () => {
    const dropDownContent = screen.getByText(/content/i).parentElement!

    expect(dropDownContent).toHaveStyle({ opacity: 0 })
    expect(dropDownContent.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(dropDownContent).toHaveStyle({ opacity: 1 })
    expect(dropDownContent.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when overlay clicking on overlay', () => {
    const content = screen.getByText(/content/i).parentElement!
    const overlay = content.nextElementSibling!

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay.getAttribute('aria-hidden')).toBe('true')
  })
})
