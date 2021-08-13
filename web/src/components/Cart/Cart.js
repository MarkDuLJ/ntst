import { navigate, routes, Link } from '@redwoodjs/router'

import { useCart, CartItem, CartTotal } from 'src/components/Cart'

export const Cart = () => {
  const { cart, clearCartItems } = useCart()

  if (!cart.cartItems.length) {
    return (
      <p>
        Your cart is empty.{' '}
        <Link to={routes.product()}>Continue shopping.</Link>
      </p>
    )
  }

  return (
    <>
      {cart.cartItems &&
        cart.cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      <div className="cart-footer m-9">
        <CartTotal label="Subtotal:" />
        <div className="cart-footer-actions flex flex-row justify-end">
          <button
            className="bg-ntst-purple text-ntst-white font-semibold p-3 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
            onClick={() => navigate(routes.checkout())}
          >
            Checkout
          </button>{' '}
          <button
            className="bg-ntst-purple text-ntst-white font-semibold p-3 ml-4 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
            onClick={() => clearCartItems()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  )
}
