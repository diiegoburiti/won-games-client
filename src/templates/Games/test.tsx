import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { render } from 'utils/test-utils'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from './mocks'

import Games from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

/* jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
})) */

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    render(
      <MockedProvider mocks={[]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })
})
