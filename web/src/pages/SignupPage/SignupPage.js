import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'
import { useState } from 'react'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = useState(null)
  const onSubmit = (data) => {
    setError(null)
    client
      .signup(data.email, data.password)
      .then(() => navigate(routes.signin()))
      .catch((err) => setError(err.message))
  }
  return (
    <>
      <div className="flex flex-col border p-8 shadow-md border-blue-400 rounded-md w-1/5 mx-auto my-14">
        <p className="text-xs text-center mb-1 text-blue-500">
          Don't have an account?{' '}
        </p>
        <h1 className="text-center text-ntst-blue font-semibold text-xl mb-3">
          Sign Up Here
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
            Sign Up
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default SignupPage
