import Event from 'src/components/Event'

const Events = ({ events }) => {
  return (
    <>
      <div className="container flex flex-col md:overflow-x-scroll md:flex-row md:pb-3">
        {events.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </div>

      {events.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </>
  )
}

export default Events
