import { Link, routes } from '@redwoodjs/router'

const ArticleDetailCard = ({ article }) => {
  const { title, description, createAt, author } = article
  return (
    <>
      <div className="flex flex-col p-6 mb-9 w-5/6 mx-auto">
        <h2 className="text-4xl text-center text-ntst-blue font-bold mb-2 p-3">
          {title}
        </h2>
        <p className="font-semibold text-xl text-right mb-3">Author:{author}</p>
        <h2 className="text-justify">{description}</h2>

        <p className="font-semibold mt-2 text-right">
          Date created: {createAt}
        </p>
      </div>
    </>
  )
}

export default ArticleDetailCard
