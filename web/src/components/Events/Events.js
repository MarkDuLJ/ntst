import Event from 'src/components/Event'

const Events = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </>
  )
}

export default Events
