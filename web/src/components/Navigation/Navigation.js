import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import SignoutBtn from 'src/components/SignoutBtn'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <div>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>

          <div className="flex flex-row items-center justify-center">
            <Link to={routes.signup()} className="text-sm">
              <div className="p-4 text-blue-400 hover:bg-ntst-blue hover:text-ntst-white cursor-pointer text-center">
                Sign Up
              </div>
            </Link>

            <Link to={routes.signin()} className="text-lg">
              <div className="p-4 hover:bg-ntst-blue hover:text-ntst-white cursor-pointer">
                Sign In
              </div>
            </Link>

          </div>
        </>
      )}
    </div>
  )
}

export default Navigation
