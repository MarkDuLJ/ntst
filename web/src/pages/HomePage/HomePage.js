import { Link, routes } from '@redwoodjs/router'
import CompanyEventsCell from 'src/components/CompanyEventsCell'

const HomePage = () => {
  return (
    <>
      {/* News and Events section */}
      <h2 className="container mt-6 mb-6 text-3xl text-ntst-blue">
        News and Events
      </h2>
      <CompanyEventsCell />
      {/* Hero section */}
      <section className="relative font-Poppins">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content  */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-ntst-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              Ventilator supplier
            </h2>
            <p className="text-ntst-grey text-lg text-center lg:text-left mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              aliquam quaerat doloribus delectus ut eius optio eveniet illum
              soluta nemo perferendis totam, voluptatibus atque consequuntur
              nostrum temporibus rem veritatis? Corrupti.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className="btn btn-purple hover:bg-ntst-white hover:text-black"
              >
                Buy in store
              </button>
              <Link
                className="btn btn-white hover:bg-ntst-purple hover:text-white"
                to={routes.product()}
              >
                Buy Online
              </Link>
            </div>
          </div>

          {/* Image  */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </div>
        {/* Rounded rectangle */}
        <div className="hidden md:block overflow-hidden bg-ntst-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>

      {/* Products Section */}
      <section className="bg-ntst-white py-20 mt-20 lg:mt-60">
        {/* Heading  */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-ntst-blue">Products</h1>
          <p className="text-center text-ntst-grey mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            rerum repellendus eum, omnis commodi quod temporibus laboriosam nam
            labore vitae magnam beatae earum dignissimos magni saepe iste
            aperiam ex?
          </p>
        </div>

        {/* Product #1  */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image  */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                alt=""
              />
            </div>
            {/* Content  */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-ntst-blue">Lorem ipsum</h1>
              <p className="text-ntst-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, distinctio! Nemo amet expedita quod voluptas quaerat
                libero qui dolorem totam magni cumque, neque sapiente quasi
                delectus, fugiat vero. Odio, dicta!
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-ntst-white hover:text-black"
              >
                More info
              </button>
            </div>
          </div>
          {/* Rounded rectangle  */}
          <div className="hidden lg:block overflow-hidden bg-ntst-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
        </div>

        {/* Product #2  */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* Image  */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1615486511262-c7b5c7f42b14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                alt=""
              />
            </div>
            {/* Content  */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-ntst-blue">Lorem ipsum</h1>
              <p className="text-ntst-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, distinctio! Nemo amet expedita quod voluptas quaerat
                libero qui dolorem totam magni cumque, neque sapiente quasi
                delectus, fugiat vero. Odio, dicta!
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-ntst-white hover:text-black"
              >
                More info
              </button>
            </div>
          </div>
          {/* Rounded rectangle  */}
          <div className="hidden lg:block overflow-hidden bg-ntst-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36"></div>
        </div>

        {/* Product #3  */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1513224502586-d1e602410265?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                alt=""
              />
            </div>
            {/* Content  */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-ntst-blue">Lorem ipsum</h1>
              <p className="text-ntst-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, distinctio! Nemo amet expedita quod voluptas quaerat
                libero qui dolorem totam magni cumque, neque sapiente quasi
                delectus, fugiat vero. Odio, dicta!
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-ntst-white hover:text-black"
              >
                More info
              </button>
            </div>
          </div>
          {/* Rounded rectangle  */}
          <div className="hidden lg:block overflow-hidden bg-ntst-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
        </div>
      </section>

      {/* Questions section */}
      <section className="bg-ntst-white py-20">
        <div className="container">
          {/* Heading */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-ntst-blue">
              Frequently asked questions
            </h1>
            <p className="text-center text-ntst-grey mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              rerum repellendus eum, omnis commodi quod temporibus laboriosam
              nam labore vitae magnam beatae earum dignissimos magni saepe iste
              aperiam ex?
            </p>
          </div>
          {/* FAQ items */}
          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Who are we?</span>
              <i className="fas fa-chevron-down text-ntst-purple"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How can we help?</span>
              <i className="fas fa-chevron-down text-ntst-purple"></i>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How to buy?</span>
              <i className="fas fa-chevron-down text-ntst-purple"></i>
            </div>
            <button
              type="button"
              className="flex self-center mt-12 btn btn-purple hover:bg-ntst-white hover:text-black"
            >
              More info
            </button>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="bg-ntst-purple text-white py-20">
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
              <button
                type="button"
                className="btn bg-ntst-red text-ntst-white rounded hover:bg-ntst-white hover:text-black"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
