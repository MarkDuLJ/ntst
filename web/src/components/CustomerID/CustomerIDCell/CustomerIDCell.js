import CustomerId from 'src/components/CustomerID/CustomerID'

export const QUERY = gql`
  query FindCustomerIdById($id: Int!) {
    customerId: customerId(id: $id) {
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

export const Empty = () => <div>CustomerId not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ customerId }) => {
  return <CustomerId customerId={customerId} />
}
