import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import ShowCase from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  gamesCard: gamesMock.slice(0, 1)
}

describe('<ShowCase />', () => {
  it('should render ShowCase', () => {
    const { container } = renderWithTheme(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[1].title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render ShowCase without title', () => {
    renderWithTheme(
      <ShowCase gamesCard={props.gamesCard} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: gamesMock[1].title })

    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: /most Popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render ShowCase without highlight', () => {
    renderWithTheme(
      <ShowCase gamesCard={props.gamesCard} title={props.title} />
    )

    expect(
      screen.getByRole('heading', { name: gamesMock[1].title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most Popular/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })
})
