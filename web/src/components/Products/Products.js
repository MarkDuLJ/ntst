import Product from 'src/components/product'

const Products = ({ products }) => {
  return (
    <>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-10">
        {products.map((product) => (
          <Product product={product} key={product.id} />


     
        ))}
      </div>

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

    </>
  )
}

export default Products
