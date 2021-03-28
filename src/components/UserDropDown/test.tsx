import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropDown from '.'

const props = {
  userName: 'Diego Buriti'
}

describe('<UserDropDown />', () => {
  it('should render the username', () => {
    const { container } = renderWithTheme(
      <UserDropDown userName={props.userName} />
    )

    expect(screen.getByText(/Diego Buriti/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropDown userName={props.userName} />)

    userEvent.click(screen.getByText(`${props.userName}`))

    expect(
      screen.getByRole('link', { name: /My Profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign Out/i })).toBeInTheDocument()
  })
})
