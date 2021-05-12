import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'
import React from 'react'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  hasText = false,
  size = 'small'
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const buttonText = isInCart(id) ? 'Remove From Cart' : 'Add To Cart'

  function handleClick() {
    isInCart(id) ? removeFromCart(id) : addToCart(id)
  }

  return (
    <Button
      size={size}
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      onClick={handleClick}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default CartButton
