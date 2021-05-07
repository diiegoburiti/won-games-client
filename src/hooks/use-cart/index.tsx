import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/forma-price'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
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
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  const { data, loading } = useQueryGames({
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

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCartItems = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    const newCartItems = [...cartItems, id]
    saveCartItems(newCartItems)
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((itemId: string) => itemId !== id)
    saveCartItems(newCartItems)
  }

  const clearCart = () => {
    saveCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
