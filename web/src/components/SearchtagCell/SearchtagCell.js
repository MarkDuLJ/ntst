import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindSearchtagQuery($tag: String!) {
    searchProducts(tag: $tag) {
      id
      name
      imgUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No related products</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ searchProducts }) => {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {searchProducts.map((product) => (
        <div
          key={product.id}
          className="p-5 flex flex-col items-center justify-center shadow-md border w-1/5"
        >
          <Link
            to={routes.productdetail({ id: product.id })}
            className="p-2 mb-2 hover:bg-ntst-blue hover:text-ntst-white"
          >
            {product.name}
          </Link>
          <Link to={routes.productdetail({ id: product.id })}>
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-12 h-12 rounded object-cover "
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
