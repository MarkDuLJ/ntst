
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

import { useState, useEffect } from 'react'
import { useCart } from 'src/components/Cart'

const Product = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  const { addItem } = useCart()
  const [carting, setCarting] = useState(false)

  let timer

  const onClick = () => {
    setCarting(true)
    timer = setTimeout(() => setCarting(false), 1000)
    addItem({ item: { ...product, price: price * 100 } })
  }

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt={tag} style={{ width: '150px' }} />
      <p>{price}</p>
      <p>{tag}</p>
      <div className="">
        <button disabled={carting} onClick={() => onClick()}>
          Add To Cart
        </button>

      </div>
    </div>
  )
}

export default Product
