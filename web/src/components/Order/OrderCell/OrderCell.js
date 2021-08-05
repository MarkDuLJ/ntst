import Order from 'src/components/Order/Order'

export const QUERY = gql`
  query FindOrderById($id: Int!) {
    order: order(id: $id) {
      order_id
      order_date
      cus_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Order not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ order }) => {
  return <Order order={order} />
}
