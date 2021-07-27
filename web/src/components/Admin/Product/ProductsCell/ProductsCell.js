import { Link, routes } from '@redwoodjs/router'

import Products from 'src/components/Admin/Product/Products'

export const QUERY = gql`
  query FindProducts {
    products {
      id
      type
      name
      description
      price
      tag
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <Link to={routes.adminNewProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  return <Products products={products} />
}
