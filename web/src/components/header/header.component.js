import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-ntst-blue p-6">
          <div className="flex items-center  flex-shrink-0 text-white mr-6">
            <Link
              to={routes.home()}
              className="block mt-5 text-2xl sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
            >
              NTST
            </Link>
          </div>
          <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="uppercase text-sm sm:flex-grow">
              <Link
                to={routes.products()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                Products
              </Link>
              <Link
                to={routes.about()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
              >
                About
              </Link>
              <button className="uppercase block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4">
                Knowledge
              </button>
              {/* <Link
            to={routes.shop()}
            className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4"
          >
            Shop
          </Link> */}
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
    </>
  )
}

export default Header
