import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
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

const Product = ({ product }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted')
      navigate(routes.adminProducts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Product {product.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{product.type}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{product.description}</td>
            </tr>
            <tr>
              <th>Img url</th>
              <td>{product.imgUrl}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{product.price}</td>
            </tr>
            <tr>
              <th>Tag</th>
              <td>{product.tag}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditProduct({ id: product.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(product.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Product
