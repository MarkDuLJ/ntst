import Event from 'src/components/Admin/Event/Event'

export const QUERY = gql`
  query FindEventById($id: Int!) {
    event: event(id: $id) {
      id
      title
      description
      imgUrl
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Event not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ event }) => {
  return <Event event={event} />
}
