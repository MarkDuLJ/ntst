// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import ArticlesLayout from 'src/layouts/Admin/ArticlesLayout'
import EventsLayout from 'src/layouts/Admin/EventsLayout'
import ProductsLayout from 'src/layouts/Admin/ProductsLayout'
import NtstLayout from 'src/layouts/NtstLayout/NtstLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home" role={['admin', 'manager']}>
        <Set wrap={ArticlesLayout}>
          <Route path="/admin/articles/new" page={AdminArticleNewArticlePage} name="adminNewArticle" />
          <Route path="/admin/articles/{id:Int}/edit" page={AdminArticleEditArticlePage} name="adminEditArticle" />
          <Route path="/admin/articles/{id:Int}" page={AdminArticleArticlePage} name="adminArticle" />
          <Route path="/admin/articles" page={AdminArticleArticlesPage} name="adminArticles" />
        </Set>
        <Set wrap={EventsLayout}>
          <Route path="/admin/events/new" page={AdminEventNewEventPage} name="adminNewEvent" />
          <Route path="/admin/events/{id:Int}/edit" page={AdminEventEditEventPage} name="adminEditEvent" />
          <Route path="/admin/events/{id:Int}" page={AdminEventEventPage} name="adminEvent" />
          <Route path="/admin/events" page={AdminEventEventsPage} name="adminEvents" />
        </Set>
        <Set wrap={ProductsLayout}>
          <Route path="/admin/products/new" page={AdminProductNewProductPage} name="adminNewProduct" />
          <Route path="/admin/products/{id:Int}/edit" page={AdminProductEditProductPage} name="adminEditProduct" />
          <Route path="/admin/products/{id:Int}" page={AdminProductProductPage} name="adminProduct" />
          <Route path="/admin/products" page={AdminProductProductsPage} name="adminProducts" />
        </Set>
      </Private>
      <Set wrap={NtstLayout}>
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/event-detail/{id:Int}" page={EventDetailPage} name="eventDetail" />
        <Route path="/articledetail/{id:Int}" page={ArticledetailPage} name="articledetail" />
        <Route path="/productdetail/{id:Int}" page={ProductdetailPage} name="productdetail" />
        <Route path="/article" page={ArticlePage} name="article" />
        <Route path="/product" page={ProductPage} name="product" />
        <Route path="/cart" page={CartPage} name="cart" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
