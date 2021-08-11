import Article from 'src/components/Article'
const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </>
  )
}

export default Articles
