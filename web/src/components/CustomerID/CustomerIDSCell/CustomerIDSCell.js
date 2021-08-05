import { Link, routes } from '@redwoodjs/router'

import CustomerIds from 'src/components/CustomerID/CustomerIDS'

export const QUERY = gql`
  query FindCustomerIds {
    customerIds {
      customer_id
      first_name
      last_name
      Phone
      Email
      PostalCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No customerIds yet. '}
      <Link to={routes.newCustomerID()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ customerIds }) => {
  return <CustomerIds customerIds={customerIds} />
}
