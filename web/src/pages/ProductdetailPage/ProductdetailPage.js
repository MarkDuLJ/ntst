import { Link, routes } from '@redwoodjs/router'
import ProductdetailCell from 'src/components/ProductdetailCell'

const ProductdetailPage = ({id}) => {
  return (
    <>
      <h1>ProductdetailPage</h1>
     <ProductdetailCell id={id}/>
    </>
  )
}

export default ProductdetailPage
