import { currency } from 'src/utils'

import { useCart } from './CartContext'

export const CartTotal = ({ label }) => {
  const { cart } = useCart()
  // console.log(cart)
  return (
    <div className="cart-total mb-4 font-bold text-xl flex flex-row justify-end">
      {label && <span className="">{label} </span>}
      <span className="">{currency(cart.cartTotal)}</span>
    </div>
  )
}
