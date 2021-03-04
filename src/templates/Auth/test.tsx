import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos, children, title ', () => {
    renderWithTheme(<Auth title="Welcome">Enjoi it</Auth>)

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', { name: /welcome/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/enjoi it/i)).toBeInTheDocument()
  })
})
