import { Link, routes } from '@redwoodjs/router'

const CartPage = () => {
  return (
    <>
      <h1>CartPage</h1>
      <p>
        Find me in <code>./web/src/pages/CartPage/CartPage.js</code>
      </p>
      <p>
        My default route is named <code>cart</code>, link to me with `
        <Link to={routes.cart()}>Cart</Link>`
      </p>
    </>
  )
}

export default CartPage
