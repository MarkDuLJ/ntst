// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ProductsLayout from 'src/layouts/Admin/ProductsLayout'
import NtstLayout from 'src/layouts/NtstLayout/NtstLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ProductsLayout}>
        <Route path="/admin/products/new" page={AdminProductNewProductPage} name="adminNewProduct" />
        <Route path="/admin/products/{id:Int}/edit" page={AdminProductEditProductPage} name="adminEditProduct" />
        <Route path="/admin/products/{id:Int}" page={AdminProductProductPage} name="adminProduct" />
        <Route path="/admin/products" page={AdminProductProductsPage} name="adminProducts" />
      </Set>
      <Set wrap={NtstLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
