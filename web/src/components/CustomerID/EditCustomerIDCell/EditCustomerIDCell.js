import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CustomerIdForm from 'src/components/CustomerID/CustomerIDForm'

export const QUERY = gql`
  query EditCustomerIdById($id: Int!) {
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
const UPDATE_CUSTOMER_ID_MUTATION = gql`
  mutation UpdateCustomerIdMutation($id: Int!, $input: UpdateCustomerIdInput!) {
    updateCustomerId(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ customerId }) => {
  const [updateCustomerId, { loading, error }] = useMutation(
    UPDATE_CUSTOMER_ID_MUTATION,
    {
      onCompleted: () => {
        toast.success('CustomerId updated')
        navigate(routes.customerIds())
      },
    }
  )

  const onSave = (input, id) => {
    updateCustomerId({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CustomerId {customerId.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CustomerIdForm
          customerId={customerId}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
