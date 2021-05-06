import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
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
}

export const CartContextDefaultValues = {
  items: []
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

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
