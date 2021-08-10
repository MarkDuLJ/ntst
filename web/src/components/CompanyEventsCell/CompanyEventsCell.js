import Events from 'src/components/Events'

export const QUERY = gql`
  query CompanyEventsQuery {
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

export const Empty = () => <div><h2>No events yet</h2></div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ events }) => {
  return (
    <>
      <Events events={events} />
    </>
  )
}
