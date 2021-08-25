import { Link, routes } from '@redwoodjs/router'
import ProductdetailCell from 'src/components/ProductdetailCell'

const ProductdetailPage = ({ id }) => {
  return (
    <>
      <h1 className="text-center text-ntst-blue font-bold text-4xl p-7">
        Product Details
      </h1>
      <div className="w-1/3 mx-auto">
        <ProductdetailCell id={id} />
      </div>
    </>
  )
}

export default ProductdetailPage
