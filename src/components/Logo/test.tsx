import { screen } from '@testing-library/react'
import { renderWithTheme } from 'components/utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render logo by default normal size', () => {
    renderWithTheme(<Logo color="black" size="normal" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render logo large size', () => {
    renderWithTheme(<Logo color="black" size="large" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
