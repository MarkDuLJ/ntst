import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CUSTOMER_ID_MUTATION = gql`
  mutation DeleteCustomerIdMutation($id: Int!) {
    deleteCustomerId(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CustomerId = ({ customerId }) => {
  const [deleteCustomerId] = useMutation(DELETE_CUSTOMER_ID_MUTATION, {
    onCompleted: () => {
      toast.success('CustomerId deleted')
      navigate(routes.customerIds())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete customerId ' + id + '?')) {
      deleteCustomerId({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CustomerId {customerId.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Customer id</th>
              <td>{customerId.customer_id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{customerId.first_name}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{customerId.last_name}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{customerId.Phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{customerId.Email}</td>
            </tr>
            <tr>
              <th>Postal code</th>
              <td>{customerId.PostalCode}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCustomerID({ id: customerId.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(customerId.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CustomerId
