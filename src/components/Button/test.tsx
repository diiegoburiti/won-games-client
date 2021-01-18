import { screen } from '@testing-library/react'
import { renderWithTheme } from 'components/utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      fontSize: '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.0rem',
      fontSize: '1.6rem'
    })
  })

  it('should render with width 100& when fullWidth is passed', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
})
