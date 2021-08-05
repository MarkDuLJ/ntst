import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CategoryForm from 'src/components/Category/CategoryForm'

export const QUERY = gql`
  query EditCategoryById($id: Int!) {
    category: category(id: $id) {
      category_id
      category_name
      notes
    }
  }
`
const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategoryMutation($id: Int!, $input: UpdateCategoryInput!) {
    updateCategory(id: $id, input: $input) {
      category_id
      category_name
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ category }) => {
  const [updateCategory, { loading, error }] = useMutation(
    UPDATE_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Category updated')
        navigate(routes.categories())
      },
    }
  )

  const onSave = (input, id) => {
    updateCategory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Category {category.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CategoryForm
          category={category}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}