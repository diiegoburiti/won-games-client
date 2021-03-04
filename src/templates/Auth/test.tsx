import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos, children, title, subtitle, footer', () => {
    renderWithTheme(
      <Auth title="Welcome to our page">
        <span>Enjoy it </span>
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /Welcome to our page/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WOM is the best and most complete gaming plataform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Won Games 2020 - 2021 © All rights reserved./i)
    ).toBeInTheDocument()

    expect(screen.getByText(/enjoy it/i)).toBeInTheDocument()
  })
})
