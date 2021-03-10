import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock Footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render Base', () => {
    renderWithTheme(
      <Base>
        <h1>Children</h1>
      </Base>
    )

    expect(screen.getByTestId('mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('mock Footer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Children/i })
    ).toBeInTheDocument()
  })
})
