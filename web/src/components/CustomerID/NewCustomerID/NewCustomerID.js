import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CustomerIdForm from 'src/components/CustomerID/CustomerIDForm'

const CREATE_CUSTOMER_ID_MUTATION = gql`
  mutation CreateCustomerIdMutation($input: CreateCustomerIdInput!) {
    createCustomerId(input: $input) {
      id
    }
  }
`

const NewCustomerId = () => {
  const [createCustomerId, { loading, error }] = useMutation(
    CREATE_CUSTOMER_ID_MUTATION,
    {
      onCompleted: () => {
        toast.success('CustomerId created')
        navigate(routes.customerIds())
      },
    }
  )

  const onSave = (input) => {
    createCustomerId({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CustomerId</h2>
      </header>
      <div className="rw-segment-main">
        <CustomerIdForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCustomerId
