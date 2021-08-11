import { currency } from 'src/utils'

import { useCart } from './CartContext'

export const CartTotal = ({ label }) => {
  const { cart } = useCart()
  // console.log(cart)
  return (
    <div className="cart-total">
      {label && <span className="">{label} </span>}
      <span className="">{currency(cart.cartTotal)}</span>
    </div>
  )
}
