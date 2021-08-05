import { Link, routes } from '@redwoodjs/router'

import Orderdetails from 'src/components/Orderdetail/Orderdetails'

export const QUERY = gql`
  query FindOrderdetails {
    orderdetails {
      orderitem_id
      prod_id
      oid
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No orderdetails yet. '}
      <Link to={routes.newOrderdetail()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ orderdetails }) => {
  return <Orderdetails orderdetails={orderdetails} />
}
