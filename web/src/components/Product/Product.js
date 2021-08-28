import { Link, routes } from '@redwoodjs/router'

import { useState, useEffect } from 'react'
import { useCart } from 'src/components/Cart'
import { truncate } from 'src/utils'

const Product = ({ product }) => {
  const { name, description, imgUrl, price, tag } = product
  const { addItem } = useCart()
  const [carting, setCarting] = useState(false)
  const [extenddesc, setExtenddesc] = useState(false)

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
        <Link to={routes.productdetail({ id: product.id })}>
          <h2 className="font-semibold text-center">{name}</h2>
        </Link>

        <Link to={routes.productdetail({ id: product.id })}>
          <img src={imgUrl} alt={tag} className="w-80 h-40 object-cover" />
        </Link>

        <p className="text-center my-4 font-semibold">${price}</p>

        <button onClick={() => setExtenddesc(!extenddesc)}>
          {extenddesc ? description : truncate(description)}
        </button>

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
