import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'

const SignoutBtn = () => {
  const { logOut } = useAuth()
  const onClick = () => {
    logOut().then(() => navigate(routes.home()))
  }
  return (
    <button
      onClick={() => onClick()}
      className="p-4 mt-1 border font-semibold border-ntst-white text-ntst-blue text-center hover:bg-ntst-blue hover:text-ntst-white"
    >
      Log Out
    </button>
  )
}

export default SignoutBtn
