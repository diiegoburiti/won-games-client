import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import WishList from '.'

const props = {
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: HighlightMock
}

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase" />
  }
}))

describe('<WishList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<WishList {...props} />)

    expect(
      screen.getByRole('heading', { name: /WishList/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
