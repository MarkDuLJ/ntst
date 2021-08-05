// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import DocumentsLayout from 'src/layouts/DocumentsLayout'
import OrderdetailsLayout from 'src/layouts/OrderdetailsLayout'
import OrdersLayout from 'src/layouts/OrdersLayout'
import CustomerIDSLayout from 'src/layouts/CustomerIDSLayout'
import CategoriesLayout from 'src/layouts/CategoriesLayout'
import ProductsLayout from 'src/layouts/Admin/ProductsLayout'
import NtstLayout from 'src/layouts/NtstLayout/NtstLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DocumentsLayout}>
        <Route path="/documents/new" page={DocumentNewDocumentPage} name="newDocument" />
        <Route path="/documents/{id:Int}/edit" page={DocumentEditDocumentPage} name="editDocument" />
        <Route path="/documents/{id:Int}" page={DocumentDocumentPage} name="document" />
        <Route path="/documents" page={DocumentDocumentsPage} name="documents" />
      </Set>
      <Set wrap={OrderdetailsLayout}>
        <Route path="/orderdetails/new" page={OrderdetailNewOrderdetailPage} name="newOrderdetail" />
        <Route path="/orderdetails/{id:Int}/edit" page={OrderdetailEditOrderdetailPage} name="editOrderdetail" />
        <Route path="/orderdetails/{id:Int}" page={OrderdetailOrderdetailPage} name="orderdetail" />
        <Route path="/orderdetails" page={OrderdetailOrderdetailsPage} name="orderdetails" />
      </Set>
      <Set wrap={OrdersLayout}>
        <Route path="/orders/new" page={OrderNewOrderPage} name="newOrder" />
        <Route path="/orders/{id:Int}/edit" page={OrderEditOrderPage} name="editOrder" />
        <Route path="/orders/{id:Int}" page={OrderOrderPage} name="order" />
        <Route path="/orders" page={OrderOrdersPage} name="orders" />
      </Set>
      <Set wrap={CustomerIDSLayout}>
        <Route path="/customer-ids/new" page={CustomerIDNewCustomerIDPage} name="newCustomerID" />
        <Route path="/customer-ids/{id:Int}/edit" page={CustomerIDEditCustomerIDPage} name="editCustomerID" />
        <Route path="/customer-ids/{id:Int}" page={CustomerIDCustomerIDPage} name="customerId" />
        <Route path="/customer-ids" page={CustomerIDCustomerIDSPage} name="customerIds" />
      </Set>
      <Set wrap={CategoriesLayout}>
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
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
