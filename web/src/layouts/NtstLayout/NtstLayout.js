import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
          <div className="flex items-center  flex-shrink-0 text-white mr-6">
            <span className="font-bold text-xl">NTST</span>
          </div>
          <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="uppercase text-sm sm:flex-grow">
              <Link
                to={routes.home()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                Home
              </Link>
              <Link
                to={routes.product()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                Product
              </Link>
              <Link
                to={routes.article()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                Article
              </Link>
              <Link
                to={routes.about()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                About
              </Link>
              <button className="uppercase block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4">
                Shop
              </button>

              <Link
                to={routes.contact()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                Contact
              </Link>
            </div>
            {/* Shopping cart */}
            <button href="#" className="block cursor-pointer px-4 py-2">
              <i className="text-xl text-ntst-white hover:text-ntst-purple fas fa-shopping-cart"></i>
            </button>
            {/* Login */}
            <button
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-ntst-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <div className="flex items-center  flex-shrink-0 text-white mr-6">
              <span className="font-bold text-xl">NTST</span>
            </div>
            <ul className="flex text-white uppercase gap-12 text-xs">
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex gap-10 mt-12 md:mt-0">
            <li className="list-none">
              <i className="text-white text-2xl fab fa-twitter hover:text-ntst-grey cursor-pointer"></i>
            </li>
            <li className="list-none">
              <i className="text-white text-2xl fab fa-facebook hover:text-ntst-grey cursor-pointer"></i>
            </li>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BlogLayout
