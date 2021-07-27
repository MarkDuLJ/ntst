import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ProductsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminProducts()} className="rw-link">
            Products
          </Link>
        </h1>
        <Link
          to={routes.adminNewProduct()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Product
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ProductsLayout
