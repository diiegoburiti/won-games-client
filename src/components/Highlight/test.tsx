import { screen } from '@testing-library/react'
import { renderWithTheme } from 'components/utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'heading 1',
  subTitle: 'heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/rd2'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    /* const { container } = */ renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    /* expect(container.firstChild).toMatchSnapshot() */
  })
})
