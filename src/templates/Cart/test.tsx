import 'match-media-mock'
import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Cart from '.'

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  recommendedTitle: 'You may like these games'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase" />
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('components/PaymentForm', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentForm" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    render(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentForm')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })
})
