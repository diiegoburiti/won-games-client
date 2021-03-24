import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Profile>
        <span>Hello world</span>
      </Profile>
    )

    expect(
      screen.getByRole('heading', { name: /My profile/i })
    ).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
