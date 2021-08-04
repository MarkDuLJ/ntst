//import CustomButton from '../custom-button/custom-button.component'
import { Link, routes } from '@redwoodjs/router'

const ContactComponent = () => {
  return (
    <section className="bg-ntst-blue text-white py-20">
      <div className="container">
        <div className="sm:w-3/4 lg:w-2/4 mx-auto">
          <p className="uppercase font-light text-center mb-8">
            +35,000 clients across Canada
          </p>
          <h1 className="text-3xl text-center uppercase">
            Subscribe to our newsletter
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter your email"
              className="focus:outline-none rounded-md flex-1 px-2 py-3 text-black"
            />
            <Link
              to={routes.contact()}
              className="block text-lg rounded text-black bg-ntst-white p-4"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent
