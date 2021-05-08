import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import itemsMock from './mock'

import OrderList from '.'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrderList />', () => {
  it('should render OrderList correclty', () => {
    const { container } = render(<OrderList items={itemsMock} />)

    expect(
      screen.getByRole('heading', { name: /My orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId(/Mock GameItem/i)).toHaveLength(2)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render OrderList correclty', () => {
    render(<OrderList />)

    expect(screen.getByTestId(/Mock Empty/i)).toBeInTheDocument()
  })
})
