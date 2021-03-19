import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Nothing here',
  description: 'Some text here'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Nothing here/ })
    ).toBeInTheDocument()

    expect(screen.getByText(/Nothing here/i)).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render a Link when props hasLink is passed', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('link', { name: /Go Back to Store/i })
    ).toHaveAttribute('href', '/')
  })

  it('shouldn´t render a Link when props hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(screen.queryByText(/Go Back to Store/i)).not.toBeInTheDocument()
  })
})
