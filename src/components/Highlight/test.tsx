import { screen } from '@testing-library/react'
import { renderWithTheme } from 'components/utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'heading 1',
  subTitle: 'heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/rd2',
  backgroundImage: '/img/red-dead-img.jpg'
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

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url( ${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-img.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-img.png'
    )
  })

  it('should render floaImage aling left by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render floaImage aling right when alingment is passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alingment="right" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )
  })
})
