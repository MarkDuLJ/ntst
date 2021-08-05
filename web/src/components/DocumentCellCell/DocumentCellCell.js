export const QUERY = gql`
  query FindDocumentCellQuery($id: Int!) {
    documentCell: document(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ document }) => {
  return <div>{JSON.stringify(document)}</div>
}
