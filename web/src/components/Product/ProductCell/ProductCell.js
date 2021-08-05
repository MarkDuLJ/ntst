import Product from 'src/components/Product/Product'

export const QUERY = gql`
  query FindProductById($id: Int!) {
    product: product(id: $id) {
      id
      name
      description
      price
      tag
      cat_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Product not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ product }) => {
  return <Product product={product} />
}
