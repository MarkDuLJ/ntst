import Article from 'src/components/Article'
const Articles = ({ articles }) => {
  return (
    <>

      <div className="container p-3">
        {articles.map((article) => (
          <Article article={article} />
        ))}
      </div>

      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}

    </>
  )
}

export default Articles
