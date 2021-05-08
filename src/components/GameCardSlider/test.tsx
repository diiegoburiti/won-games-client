import 'match-media-mock'
import { screen } from '@testing-library/react'

import GameCardSlider from '.'
import { render } from 'utils/test-utils'

import theme from 'styles/theme'

import mockItems from './mock'

describe('<GameCardSlider />', () => {
  it('should render GameCardSlider with 5 items', () => {
    const { container } = render(<GameCardSlider items={mockItems} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
  })

  it('should render arrow left and right', () => {
    render(<GameCardSlider items={mockItems} />)

    expect(screen.getByLabelText(/previous games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next games/i)).toBeInTheDocument()
  })

  it('should render white or black when color is passed', () => {
    render(<GameCardSlider items={mockItems} color="black" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
