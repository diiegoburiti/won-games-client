import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile box', () => {
    const { container } = renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /E-mail/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText('Type your password')
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText('New password')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
