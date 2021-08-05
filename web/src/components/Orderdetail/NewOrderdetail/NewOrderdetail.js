import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import OrderdetailForm from 'src/components/Orderdetail/OrderdetailForm'

const CREATE_ORDERDETAIL_MUTATION = gql`
  mutation CreateOrderdetailMutation($input: CreateOrderdetailInput!) {
    createOrderdetail(input: $input) {
      id
    }
  }
`

const NewOrderdetail = () => {
  const [createOrderdetail, { loading, error }] = useMutation(
    CREATE_ORDERDETAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Orderdetail created')
        navigate(routes.orderdetails())
      },
    }
  )

  const onSave = (input) => {
    createOrderdetail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Orderdetail</h2>
      </header>
      <div className="rw-segment-main">
        <OrderdetailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOrderdetail
