import NEWS_DATA from './new-and-events.data'
import NewsItem from '../news-item/news-item.component'

class NewsAndEvents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      news: NEWS_DATA,
    }
  }

  render() {
    const { news } = this.state
    return (
      <section className="py-20 mt-40 bg-gray-100">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            News and Events
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            rerum repellendus eum, omnis commodi quod temporibus laboriosam nam
            labore vitae magnam beatae earum dignissimos magni saepe iste
            aperiam ex?
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          {news.map(({ id, ...otherNewsProps }) => (
            <NewsItem key={id} {...otherNewsProps}></NewsItem>
          ))}
        </div>
      </section>
    )
  }
}

export default NewsAndEvents

//import CustomButton from '../custom-button/custom-button.component'

// const NewsAndEvents = () => {
//   return (
//     <div>
//       {/* Cards */}
//       <section className="py-20 mt-40 bg-gray-100">
//         {/* Heading */}
//         <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
//           <h1 className="text-3xl text-center text-bookmark-blue">
//             News and Events
//           </h1>
//           <p className="text-center text-bookmark-grey mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
//             rerum repellendus eum, omnis commodi quod temporibus laboriosam nam
//             labore vitae magnam beatae earum dignissimos magni saepe iste
//             aperiam ex?
//           </p>
//         </div>

//         {/* Cards  */}
//         <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
//           {/* Card #1  */}
//           <div className="flex flex-col rounded-md shadow-md">
//             <div className="p-3 flex flex-col items-center">
//               <img
//                 src="https://images.unsplash.com/photo-1594367031514-3aee0295ec98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                 className="w-full"
//                 alt=""
//               />
//               <p className="mb-2 mt-2 text-ntst-grey font-light text-center">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//             </div>
//             <hr className="border-b border-bookmark-white" />
//             <div className="flex p-6">
//               <button
//                 type="button"
//                 className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
//               >
//                 More Info
//               </button>
//             </div>
//           </div>

//           {/* Card #2  */}
//           <div className="flex flex-col rounded-md shadow-md">
//             <div className="p-3 flex flex-col items-center">
//               <img
//                 src="https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                 className="w-full"
//                 alt=""
//               />
//               <p className="mb-2 mt-2 text-ntst-grey font-light text-center">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//             </div>
//             <hr className="border-b border-bookmark-white" />
//             <div className="flex p-6">
//               <button
//                 type="button"
//                 className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
//               >
//                 More Info
//               </button>
//             </div>
//           </div>

//           {/* Card #3  */}
//           <div className="flex flex-col rounded-md shadow-md">
//             <div className="p-3 flex flex-col items-center">
//               <img
//                 src="https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                 className="w-full"
//                 alt=""
//               />
//               <p className="mb-2 mt-2 text-ntst-grey font-light text-center">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//             </div>
//             <hr className="border-b border-bookmark-white" />
//             <div className="flex p-6">
//               <button
//                 type="button"
//                 className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
//               >
//                 More Info
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
