import Orderdetail from 'src/components/Orderdetail/Orderdetail'

export const QUERY = gql`
  query FindOrderdetailById($id: Int!) {
    orderdetail: orderdetail(id: $id) {
      orderitem_id
      prod_id
      oid
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Orderdetail not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ orderdetail }) => {
  return <Orderdetail orderdetail={orderdetail} />
}
