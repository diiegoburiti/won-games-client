import 'match-media-mock'
import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock ShowCase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render showCase and BannerSlider', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId('mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('mock ShowCase')).toHaveLength(4)
  })
})
