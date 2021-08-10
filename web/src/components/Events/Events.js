import Event from 'src/components/Event'

const Events = ({events}) => {
  return (
    <>
       {events.map(event=><Event event={event}/>)}
    </>
  )
}

export default Events
