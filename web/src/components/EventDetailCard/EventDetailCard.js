import { Link, routes } from '@redwoodjs/router'

const EventDetailCard = ({ event }) => {
  const { title, description, imgUrl, createAt } = event
  return (
    <div className="mx-auto w-9/12 p-9">
      <h2 className="text-center text-3xl text-ntst-blue font-bold p-5 mb-4">
        {title}
      </h2>

      <div className="w-6/12 mx-auto">
        <img
          src={imgUrl}
          alt=""
          className="rounded mx-auto w-8/12 h-3/5 object-cover shadow"
        />
      </div>

      <article className="leading-loose p-5 mt-4">{description}</article>

      <p className="text-right">
        <em> Created on: {createAt}</em>
      </p>
    </div>
  )
}

export default EventDetailCard
