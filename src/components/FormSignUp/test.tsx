import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import FormSingUp from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSingUp />', () => {
  it('should render form Sign up correctly', () => {
    const { container } = render(
      <MockedProvider mocks={[]}>
        <FormSingUp />
      </MockedProvider>
    )

    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign Up Now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text to sign up if already have an account', () => {
    render(
      <MockedProvider mocks={[]}>
        <FormSingUp />
      </MockedProvider>
    )

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
  })
})
