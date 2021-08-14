//import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <div>
      {/* Cards */}
      <section className="container py-10 mt-10">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-3/4 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            About NTST-Tech
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            NTST-Tech Development Ltd is a medical equipment company located in
            Scarborough, Ontario. It focuses on remote patient monitoring with
            the use of its invasive ventilator and non-invasive ventilator for
            business and home uses.
          </p>
          <p className="text-center text-bookmark-grey mt-4">
            Since the outbreak of COVID-19, the company is expanding its
            services into prevention of COVID-19 mainly by providing breath and
            sleep quality monitoring services using its ventilators.
          </p>
          <h1 className="text-3xl text-center text-bookmark-blue mt-16 mb-0">
            Leadership
          </h1>
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
                CEO
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
                CFO
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
                CTO
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

export default AboutPage
