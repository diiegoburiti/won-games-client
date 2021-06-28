import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { Session } from 'next-auth/client'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { FormLoading } from 'components/Form'
import { createPaymentIntent } from 'utils/stripe/methods'
import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [freeGames, setFreeGames] = useState(false)
  const [loading, setLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const { items } = useCart()
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt
        })

        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }
        setFreeGames(false)
        setClientSecret(data.client_secret)
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error?.message : '')
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      push('/success')
      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setLoading(false)
      return
    }

    setError(null)
    setLoading(false)
    push('/success')
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}

          {!!error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={disabled || !!error || freeGames}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
