import React from 'react'
import CustomButton from 'src/components/custom-button/custom-button.component'
import ContactComponent from 'src/components/contact/contact.component'
import NewsAndEvents from 'src/components/news-and-events/news-and-events.component'

const HomePage = () => {
  return (
    <>
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
              <CustomButton>Buy in store</CustomButton>
              <CustomButton>Buy online</CustomButton>
            </div>
          </div>

          {/* Image  */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Rounded rectangle */}
        <div className="hidden md:block overflow-hidden bg-ntst-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>

      <NewsAndEvents></NewsAndEvents>

      {/* Products Section */}
      <section className="bg-ntst-white py-20">
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
                src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg"
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
              <CustomButton>More Info</CustomButton>
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
                src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg"
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
              <CustomButton>More Info</CustomButton>
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
                src="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg"
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
              <CustomButton>More Info</CustomButton>
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
            <CustomButton>More Info</CustomButton>
          </div>
        </div>
      </section>

      <ContactComponent></ContactComponent>
    </>
  )
}

export default HomePage
