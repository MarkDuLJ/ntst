// eslint-disable-next-line no-unused-vars
const NewsItem = ({ id, title, content, imageUrl }) => (
  <div className="container">
    <div className="flex flex-col rounded-md shadow-md">
      <div className="p-3 flex flex-col items-center">
        <img src={imageUrl} className="w-full" alt="" />
        <h2>{title}</h2>
        <p className="mb-2 mt-2 text-ntst-grey font-light text-center">
          {content}
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
)

export default NewsItem
