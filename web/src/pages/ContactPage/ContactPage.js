//import { Link, routes } from '@redwoodjs/router'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <div className="container">
        <h2 className="font-Poppins text-ntst-blue text-3xl border-b py-4 my-4 md:text-4xl lg:text-5xl text-left lg:text-left mb-6">
          Contact us
        </h2>
        <p className="font-Poppins text-left text-gray-900 text-xl py-4 my-2 md:my-10">
          Please fill out the following contact form and we will reply within 2
          business days.
        </p>

        <Form onSubmit={onSubmit} className="w-full max-w-lg font-Poppins">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Label
                name="firstName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                First Name
              </Label>
              <TextField
                name="firstName"
                validation={{ required: true }}
                errorClassName="error"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></TextField>
              <FieldError name="firstName" className="error"></FieldError>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Label
                name="lastName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Last Name
              </Label>
              <TextField
                name="lastName"
                errorClassName="error"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                validation={{ required: true }}
              ></TextField>
              <FieldError name="lastName" className="error"></FieldError>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Label
                name="email"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email
              </Label>
              <TextField
                name="email"
                errorClassName="error"
                validation={{ required: true }}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></TextField>
              <FieldError name="email" className="error"></FieldError>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Label
                name="message"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Message
              </Label>
              <TextAreaField
                name="message"
                errorClassName="error"
                validation={{ required: true }}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></TextAreaField>
              <FieldError name="message" className="error"></FieldError>

              <Submit className="block mt-2 btn btn-purple hover:btn-white">
                Send
              </Submit>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default ContactPage
