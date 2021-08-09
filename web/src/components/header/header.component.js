import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-ntst-white p-6">
          <div className="flex items-center flex-shrink-0 text-ntst-blue">
            <Link
              to={routes.home()}
              className="block mt-5 text-3xl font-bold sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple"
            >
              NTST
            </Link>
          </div>

          <div className="flex flex-col uppercase text-sm items-center md:flex-row md:justify-center md:flex-grow md:">
            <Link
              to={routes.products()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple mr-5"
            >
              Products
            </Link>

            <Link
              to={routes.about()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple mr-5"
            >
              About
            </Link>

            <div className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple mr-5 cursor-pointer">
              Knowledge
            </div>

            <div className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple mr-5 cursor-pointer">
              Shop
            </div>

            {/* <Link
                to={routes.shop()}
                className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-5"
              >
                Shop
              </Link> */}

            <Link
              to={routes.contact()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple mr-5"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:justify-end">
            {/* Shopping cart */}
            <button href="#" className="block cursor-pointer px-4 py-2">
              <i className="text-xl text-ntst-blue hover:text-ntst-purple fas fa-shopping-cart"></i>
            </button>

            {/* Login */}
            <Link
              to={routes.signInAndSignUp()}
              className="inline-block text-sm px-4 py-4 leading-none border rounded text-ntst-blue border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
