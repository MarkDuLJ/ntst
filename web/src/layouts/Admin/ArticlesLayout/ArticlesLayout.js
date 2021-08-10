import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ArticlesLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminArticles()} className="rw-link">
            Articles
          </Link>
        </h1>
        <Link
          to={routes.adminNewArticle()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Article
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ArticlesLayout
