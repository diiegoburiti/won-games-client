import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the logos, children, title, subtitle, footer', () => {
    render(
      <Auth title="Welcome to our page">
        <>
          <span>Enjoy it </span>
          <input type="text" />
        </>
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /welcome to our page/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming plataform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/won Games 2020 - 2021 © All rights reserved./i)
    ).toBeInTheDocument()

    expect(screen.getByText(/enjoy it/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
