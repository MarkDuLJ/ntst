import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import DocumentForm from 'src/components/Document/DocumentForm'

export const QUERY = gql`
  query EditDocumentById($id: Int!) {
    document: document(id: $id) {
      doc_id
      text
    }
  }
`
const UPDATE_DOCUMENT_MUTATION = gql`
  mutation UpdateDocumentMutation($id: Int!, $input: UpdateDocumentInput!) {
    updateDocument(id: $id, input: $input) {
      doc_id
      text
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ document }) => {
  const [updateDocument, { loading, error }] = useMutation(
    UPDATE_DOCUMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Document updated')
        navigate(routes.documents())
      },
    }
  )

  const onSave = (input, id) => {
    updateDocument({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Document {document.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DocumentForm
          document={document}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
