import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  PasswordField,
} from '@redwoodjs/forms'

const SignUp = () => {
  // Need to write code to handle the data input
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="w-10/12">
      <p>I don&apos;t have an account yet.</p>
      <h1 className="text-2xl mb-5 text-ntst-blue">Sign Up</h1>
      <Form className="flex flex-col" onSubmit={onSubmit}>
        <Label name="email">Email</Label>
        <TextField
          name="email"
          validation={{ required: true }}
          className="border-black border-2 rounded w-3/5 mb-8"
        ></TextField>
        <FieldError name="email" className="text-red-600 mb-2"></FieldError>

        <Label name="password">Password</Label>
        <PasswordField
          name="password"
          validation={{ required: true }}
          className="border-black border-2 rounded w-3/5"
        ></PasswordField>
        <FieldError name="password"></FieldError>

        <Submit className="text-ntst-blue p-2 border-black border-2 rounded w-1/5 mt-8">
          Sign Up
        </Submit>
      </Form>
    </div>
  )
}

export default SignUp
