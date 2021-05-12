import { render, screen } from 'utils/test-utils'
import Loader from '.'

describe('<Loader />', () => {
  it('should render the heading', () => {
    render(<Loader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
