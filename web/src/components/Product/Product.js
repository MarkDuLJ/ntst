const Product = ({product}) => {
  const {name,description,imgUrl,price,tag}=product
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt={tag}/>
      <p>{price}</p>
      <p>{tag}</p>
    </div>
  )
}

export default Product
