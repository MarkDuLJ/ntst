const Event = ({ event }) => {
  const { title, description, imgUrl, createAt } = event
  return (
    <div className="block flex-none mr-1 rounded-md shadow-md lg:mb-16 lg:w-5/12">
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl">{title}</h2>
        <p className="mb-6">{description}</p>
        <img src={imgUrl} alt={title} className="w-full mb-0 rounded" />
      </div>
    </div>
  )
}

export default Event
