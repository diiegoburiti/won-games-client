import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'Nothing here',
  description: 'Some text here'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} />)

    expect(
      screen.getByRole('heading', { name: /Nothing here/ })
    ).toBeInTheDocument()

    expect(screen.getByText(/Nothing here/i)).toBeInTheDocument()
    expect(
      screen.getByAltText(/a gamer in a couch playing videogame/i)
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render a Link when props hasLink is passed', () => {
    render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('link', { name: /Go Back to Store/i })
    ).toHaveAttribute('href', '/')
  })

  it('shouldn´t render a Link when props hasLink is not passed', () => {
    render(<Empty {...props} />)

    expect(screen.queryByText(/Go Back to Store/i)).not.toBeInTheDocument()
  })
})
