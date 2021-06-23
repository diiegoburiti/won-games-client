import { useState, useEffect } from 'react'
import { Session } from 'next-auth/client'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { createPaymentIntent } from 'utils/stripe/methods'
import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [freeGames, setFreeGames] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const { items } = useCart()
  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error?.message : '')
  }
  console.log(clientSecret)

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
        setClientSecret(data.client_secret)
      }
    }

    setPaymentMode()
  }, [items, session])

  return (
    <S.Wrapper>
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
          icon={<ShoppingCart />}
          disabled={disabled || !!error || freeGames}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
