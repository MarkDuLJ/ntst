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
          <div className="flex flex-row">
            <div className="p-4 hover:bg-ntst-blue hover:text-ntst-white cursor-pointer">
              <Link to={routes.signin()} className="text-lg">
                Sign In
              </Link>
            </div>

            <div className="p-4 hover:bg-ntst-blue hover:text-ntst-white cursor-pointer">
              <Link to={routes.signup()} className="text-lg">
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navigation
