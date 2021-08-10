import { Link, routes } from '@redwoodjs/router'

import Events from 'src/components/Admin/Event/Events'

export const QUERY = gql`
  query FindEvents {
    events {
      id
      title
      description
      imgUrl
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No events yet. '}
      <Link to={routes.adminNewEvent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ events }) => {
  return <Events events={events} />
}
