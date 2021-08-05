import Category from 'src/components/Category/Category'

export const QUERY = gql`
  query FindCategoryById($id: Int!) {
    category: category(id: $id) {
      category_id
      category_name
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Category not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ category }) => {
  return <Category category={category} />
}
