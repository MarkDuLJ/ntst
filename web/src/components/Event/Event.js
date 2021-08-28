import { Link, routes } from '@redwoodjs/router'

const Event = ({ event }) => {
  const { title, description, imgUrl, createAt } = event
  return (
    <div className="block flex-none w-full mx-auto rounded-md shadow-md p-3 lg:mb-16 lg:w-2/5 lg:mr-14">
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl p-3 hover:text-ntst-purple">
          <Link to={routes.eventDetail({ id: event.id })}>{title}</Link>
        </h2>
        <p className="mb-6 h-16 overflow-y-scroll">{description}</p>
        <img
          src={imgUrl}
          alt={title}
          className="w-full mb-0 rounded h-80 object-cover object-center"
        />
      </div>
    </div>
  )
}

export default Event
