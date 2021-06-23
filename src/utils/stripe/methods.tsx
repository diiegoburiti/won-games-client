import { CartItem } from 'hooks/use-cart'

type PaymentIntentParams = {
  items: CartItem[]
  token: string
}

const url = `${process.env.NEXT_PUBLIC_API_URL}/orders/create-payment-intent`
export const createPaymentIntent = async ({
  items,
  token
}: PaymentIntentParams) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cart: items })
  })

  return await response.json()
}
