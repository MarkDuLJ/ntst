//import { Link, routes } from '@redwoodjs/router'
import Header from 'src/components/header/header.component'
import Footer from 'src/components/footer/footer.component'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default BlogLayout
