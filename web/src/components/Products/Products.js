import Product from 'src/components/product'

const Products = ({products}) => {
  return (
    <>
      {products.map(product=><Product product={product} />)}
    </>
  )
}

export default Products
