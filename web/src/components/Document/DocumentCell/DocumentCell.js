import Document from 'src/components/Document/Document'

export const QUERY = gql`
  query FindDocumentById($id: Int!) {
    document: document(id: $id) {
      doc_id
      text
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Document not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ document }) => {
  return <Document document={document} />
}
