import { Link, routes } from '@redwoodjs/router'

import Documents from 'src/components/Document/Documents'

export const QUERY = gql`
  query FindDocuments {
    documents {
      doc_id
      text
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No documents yet. '}
      <Link to={routes.newDocument()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ documents }) => {
  return <Documents documents={documents} />
}
