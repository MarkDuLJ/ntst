import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Orderdetail/OrderdetailsCell'

const DELETE_ORDERDETAIL_MUTATION = gql`
  mutation DeleteOrderdetailMutation($id: Int!) {
    deleteOrderdetail(id: $id) {
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

const OrderdetailsList = ({ orderdetails }) => {
  const [deleteOrderdetail] = useMutation(DELETE_ORDERDETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Orderdetail deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete orderdetail ' + id + '?')) {
      deleteOrderdetail({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Orderitem id</th>
            <th>Prod id</th>
            <th>Oid</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {orderdetails.map((orderdetail) => (
            <tr key={orderdetail.id}>
              <td>{truncate(orderdetail.orderitem_id)}</td>
              <td>{truncate(orderdetail.prod_id)}</td>
              <td>{truncate(orderdetail.oid)}</td>
              <td>{truncate(orderdetail.quantity)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.orderdetail({ id: orderdetail.id })}
                    title={'Show orderdetail ' + orderdetail.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOrderdetail({ id: orderdetail.id })}
                    title={'Edit orderdetail ' + orderdetail.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete orderdetail ' + orderdetail.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(orderdetail.id)}
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

export default OrderdetailsList
