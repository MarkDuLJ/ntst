const Article = ({article}) => {
  const {title,description,createAt}=article
  return (
    <>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <p>{createAt}</p>
    </>
  )
}

export default Article
