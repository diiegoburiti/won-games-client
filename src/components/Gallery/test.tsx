import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockItems from './mock'
import Gallery from '.'

describe('<Gallery />', () => {
  it('should render the Gallery', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })
})
