import { screen } from '@testing-library/react'
import { renderWithTheme } from 'components/utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the correctly', () => {
    const { debug, container } = renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Lorem Ipsum"
        subtitle="Generic Sub Title"
        buttonLink=""
        buttonLabel=""
      />
    )

    debug(container)

    expect(
      screen.getByRole('heading', { name: /Lorem Ipsum/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /generic sub title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Lorem Ipsum/i })
    ).toBeInTheDocument()
  })
})
