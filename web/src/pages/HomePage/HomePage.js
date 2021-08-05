import React from 'react'
import CustomButton from 'src/components/custom-button/custom-button.component'
import ContactComponent from 'src/components/contact/contact.component'
import NewsAndEvents from 'src/components/news-and-events/news-and-events.component'
import { Carousel } from '3d-react-carousal'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let slides = [
      // eslint-disable-next-line react/jsx-key
      <img src="https://picsum.photos/800/300/?random" alt="1" />,
      // eslint-disable-next-line react/jsx-key
      <img src="https://picsum.photos/800/301/?random" alt="2" />,
      // eslint-disable-next-line react/jsx-key
      <img src="https://picsum.photos/800/302/?random" alt="3" />,
      // eslint-disable-next-line react/jsx-key
      <img src="https://picsum.photos/800/303/?random" alt="4" />,
      // eslint-disable-next-line react/jsx-key
      <img src="https://picsum.photos/800/304/?random" alt="5" />,
    ]
    return (
      <div>
        <div className="hidden md:block my-9 lg:my-24">
          <Carousel slides={slides} />
        </div>

        <NewsAndEvents></NewsAndEvents>

        {/* Products Section */}
        <section className="bg-ntst-white py-20">
          {/* Heading  */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-ntst-blue">Products</h1>
            <p className="text-center text-ntst-grey mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              rerum repellendus eum, omnis commodi quod temporibus laboriosam
              nam labore vitae magnam beatae earum dignissimos magni saepe iste
              aperiam ex?
            </p>
          </div>

          {/* Product #1  */}
          <div className="relative mt-20 lg:mt-24">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              {/* Image  */}
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  src="https://cdn.pixabay.com/photo/2020/11/11/12/34/medical-5732384_960_720.jpg"
                  className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                  alt=""
                />
              </div>
              {/* Content  */}
              <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-ntst-blue">Ventilator</h1>
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
            <div className="hidden lg:block overflow-hidden bg-ntst-blue rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
          </div>

          {/* Product #2  */}
          <div className="relative mt-20 lg:mt-52">
            <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
              {/* Image  */}
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849805_960_720.jpg"
                  className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                  alt=""
                />
              </div>
              {/* Content  */}
              <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-ntst-blue">
                  Home Medical Monitoring
                </h1>
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
            <div className="hidden lg:block overflow-hidden bg-ntst-blue rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36"></div>
          </div>

          {/* Product #3  */}
          <div className="relative mt-20 lg:mt-52">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              {/* Image */}
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  src="https://cdn.pixabay.com/photo/2015/08/02/14/27/vitamin-b-871135_960_720.jpg"
                  className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                  alt=""
                />
              </div>
              {/* Content  */}
              <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-ntst-blue">Health Supplements</h1>
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
            <div className="hidden lg:block overflow-hidden bg-ntst-blue rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
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
                nam labore vitae magnam beatae earum dignissimos magni saepe
                iste aperiam ex?
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
      </div>
    )
  }
}

export default HomePage
