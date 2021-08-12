const Product = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  return (
    <div>
      <div className="flex flex-col rounded-md shadow-md lg:mb-16">
        <div className="p-6 flex flex-col items-center">
          <h2>{name}</h2>

          <img src={imgUrl} alt={tag} className="w-full" />
          <p>{description}</p>
          <div className="w-full p-3 flex flex-row justify-between items-stretch">
            <p>${price}</p>
            <p>#{tag}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
