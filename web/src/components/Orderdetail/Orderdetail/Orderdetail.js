import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ORDERDETAIL_MUTATION = gql`
  mutation DeleteOrderdetailMutation($id: Int!) {
    deleteOrderdetail(id: $id) {
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

const Orderdetail = ({ orderdetail }) => {
  const [deleteOrderdetail] = useMutation(DELETE_ORDERDETAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Orderdetail deleted')
      navigate(routes.orderdetails())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete orderdetail ' + id + '?')) {
      deleteOrderdetail({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Orderdetail {orderdetail.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Orderitem id</th>
              <td>{orderdetail.orderitem_id}</td>
            </tr>
            <tr>
              <th>Prod id</th>
              <td>{orderdetail.prod_id}</td>
            </tr>
            <tr>
              <th>Oid</th>
              <td>{orderdetail.oid}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{orderdetail.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrderdetail({ id: orderdetail.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(orderdetail.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Orderdetail
