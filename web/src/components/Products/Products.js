import Product from 'src/components/product'

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  )
}

export default Products
