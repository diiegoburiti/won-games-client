import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  platforms: ['windows', 'linux', 'mac'],
  developer: 'Different Tales',
  publisher: 'Walktrough',
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Action', 'Adventure']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Release Date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genres/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /Linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Windows/i })).toBeInTheDocument()
  })

  it('should render release date', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render Free when rating BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render +18 when rating BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render genres', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText('Action / Adventure')).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/walktrough/i)).toBeInTheDocument()
  })
})
