import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home()))
      .catch((err) => setError(err.message))
  }

  return (
    <>
      <div className="flex flex-col border p-8 shadow-md border-blue-400 rounded-md w-1/5 mx-auto my-14">
        <h1 className="text-center text-ntst-blue font-semibold text-xl mb-3">
          Sign In Here
        </h1>
        <Form
          onSubmit={onSubmit}
          className="px-8 py-4 justify-center items-center flex flex-col"
        >
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          <TextField
            name="email"
            placeholder="email"
            className="p-3 border border-blue-100 rounded mb-2 focus:outline-none"
          />
          <PasswordField
            name="password"
            placeholder="password"
            className="p-3 border border-blue-100 rounded focus:outline-none"
          />

          <Submit className="p-3 px-8 mt-10 font-semibold border bg-ntst-white text-ntst-blue hover:bg-ntst-blue hover:text-ntst-white">
            Sign In
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default SigninPage
