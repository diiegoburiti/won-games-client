import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { render } from 'utils/test-utils'

import mock from './mock'

import { Overlay } from './styles'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the headings and button', () => {
    const { container } = render(
      <ExploreSidebar items={mock} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render inputs', () => {
    render(<ExploreSidebar items={mock} onFilter={jest.fn} />)

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={mock}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high'
        }}
        onFilter={onFilter}
      />
    )

    //userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={mock} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    //userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(onFilter).toHaveBeenCalledTimes(4)

    expect(onFilter).toBeCalledWith({
      platforms: ['linux', 'windows'],
      sort_by: 'low-to-high'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={mock}
        initialValues={{ platforms: ['windows'] }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    //userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toHaveBeenCalledTimes(3)

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'high-to-low'
    })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = render(
      <ExploreSidebar items={mock} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
