import EventDetailCard from 'src/components/EventDetailCard'

export const QUERY = gql`
  query FindEventDetailQuery($id: Int!) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ event }) => {
  return <EventDetailCard event={event}></EventDetailCard>
}
