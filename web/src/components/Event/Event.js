const Event = ({event}) => {
  const {title,description,imgUrl,createAt}=event
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </div>
  )
}

export default Event
