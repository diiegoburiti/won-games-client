import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: 'Gta V',
  content: '<h1>Description</h1>'
}

describe('<TextContent />', () => {
  it('should render title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(screen.getByRole('heading', { name: /gta v/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Description/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content="Description" />)

    expect(
      screen.queryByRole('heading', { name: /gta v/i })
    ).not.toBeInTheDocument()
  })
})
