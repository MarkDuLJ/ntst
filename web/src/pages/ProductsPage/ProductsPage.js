//import { Link, routes } from '@redwoodjs/router'

// Based on the clicked category, Products will need to be dynamically generated.

const ProductsPage = () => {
  return (
    <div>
      {/* Cards */}
      <section className="container py-10 mt-20">
        {/* Heading */}
        <div className="mb-5 sm:w-3/4 lg:w-4/5 mx-auto px-2">
          <h1 className="text-3xl text-left text-bookmark-blue">Products</h1>
        </div>

        {/* Category */}
        <div className="flex-col mx-auto lg:justify-between lg:w-4/5">
          <button
            type="button"
            className="bg-ntst-white rounded p-4 text-lg hover:bg-ntst-purple hover:text-ntst-white"
          >
            Ventilator
          </button>
          <button
            type="button"
            className="bg-ntst-white rounded p-4 text-lg hover:bg-ntst-purple hover:text-ntst-white"
          >
            Health Data Monitoring System
          </button>
          <button
            type="button"
            className="bg-ntst-white rounded p-4 text-lg hover:bg-ntst-purple hover:text-ntst-white"
          >
            Dietary Supplements
          </button>
        </div>

        {/* Cards  */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* Card #1  */}
          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1594367031514-3aee0295ec98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-full w-2/4"
                alt=""
              />
              <h3 className="mb-2 text-bookmark-blue text-lg text-center">
                Product name
              </h3>
              <p className="mb-2 text-bookmark-grey font-light text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>

          {/* Card #2  */}
          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-full w-2/4"
                alt=""
              />
              <h3 className="mb-2 text-bookmark-blue text-lg text-center">
                Product name
              </h3>
              <p className="mb-2 text-bookmark-grey font-light text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>

          {/* Card #3  */}
          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-full w-2/4"
                alt=""
              />
              <h3 className="mb-2 text-bookmark-blue text-lg text-center">
                Product name
              </h3>
              <p className="mb-2 text-bookmark-grey font-light text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
