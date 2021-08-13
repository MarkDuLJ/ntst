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
    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
      <div className="p-6 flex flex-col items-center">
        <h2>{name}</h2>

        <img src={imgUrl} alt={tag} className="w-full" />
        <p>{description}</p>

        <div className="w-full p-3 flex flex-row justify-between items-stretch">
          <p>${price}</p>
          <p>#{tag}</p>
        </div>

        <button
          className="bg-ntst-purple text-ntst-white font-semibold p-3 rounded-md hover:bg-ntst-white hover:text-ntst-blue"
          disabled={carting}
          onClick={() => onClick()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product
