import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/CustomerID/CustomerIDSCell'

const DELETE_CUSTOMER_ID_MUTATION = gql`
  mutation DeleteCustomerIdMutation($id: Int!) {
    deleteCustomerId(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const CustomerIdsList = ({ customerIds }) => {
  const [deleteCustomerId] = useMutation(DELETE_CUSTOMER_ID_MUTATION, {
    onCompleted: () => {
      toast.success('CustomerId deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete customerId ' + id + '?')) {
      deleteCustomerId({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Customer id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Postal code</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {customerIds.map((customerId) => (
            <tr key={customerId.id}>
              <td>{truncate(customerId.customer_id)}</td>
              <td>{truncate(customerId.first_name)}</td>
              <td>{truncate(customerId.last_name)}</td>
              <td>{truncate(customerId.Phone)}</td>
              <td>{truncate(customerId.Email)}</td>
              <td>{truncate(customerId.PostalCode)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.customerId({ id: customerId.id })}
                    title={'Show customerId ' + customerId.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCustomerID({ id: customerId.id })}
                    title={'Edit customerId ' + customerId.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete customerId ' + customerId.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(customerId.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerIdsList
