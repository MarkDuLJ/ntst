import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const CustomerIdsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.customerIds()} className="rw-link">
            CustomerIds
          </Link>
        </h1>
        <Link to={routes.newCustomerID()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New CustomerId
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CustomerIdsLayout
