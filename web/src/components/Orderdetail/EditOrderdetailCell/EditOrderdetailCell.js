import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import OrderdetailForm from 'src/components/Orderdetail/OrderdetailForm'

export const QUERY = gql`
  query EditOrderdetailById($id: Int!) {
    orderdetail: orderdetail(id: $id) {
      orderitem_id
      prod_id
      oid
      quantity
    }
  }
`
const UPDATE_ORDERDETAIL_MUTATION = gql`
  mutation UpdateOrderdetailMutation(
    $id: Int!
    $input: UpdateOrderdetailInput!
  ) {
    updateOrderdetail(id: $id, input: $input) {
      orderitem_id
      prod_id
      oid
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ orderdetail }) => {
  const [updateOrderdetail, { loading, error }] = useMutation(
    UPDATE_ORDERDETAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Orderdetail updated')
        navigate(routes.orderdetails())
      },
    }
  )

  const onSave = (input, id) => {
    updateOrderdetail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Orderdetail {orderdetail.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OrderdetailForm
          orderdetail={orderdetail}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
