import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/forma-price'
import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'
const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0'
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  const { data } = useQueryGames({
    skip: !cartItems.length,
    variables: {
      where: { id: cartItems }
    }
  })

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) return setCartItems(data)
  }, [])

  const total = data?.games.reduce((accumulator, game) => {
    return accumulator + game.price
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
