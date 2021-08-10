import Article from 'src/components/Article'
const Articles = ({articles}) => {
  return (
    <>
      {articles.map(article=><Article article={article} />)}
    </>
  )
}

export default Articles
