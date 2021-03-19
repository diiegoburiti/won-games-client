import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import WishList from '.'

const props = {
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: HighlightMock,
  games: gamesMock
}

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase" />
  }
}))

describe('<WishList />', () => {
  it('should render WishList correctly', () => {
    renderWithTheme(<WishList {...props} />)

    expect(
      screen.getByRole('heading', { name: /WishList/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()

    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(6)
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <WishList
        recommendedGames={gamesMock}
        recommendedHighlight={HighlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
