import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { render } from 'utils/test-utils'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the links', () => {
    const { container } = render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /My profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /My orders/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the links', () => {
    render(<ProfileMenu activeLink="/profile/me" />)

    expect(screen.getByRole('link', { name: /My profile/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
