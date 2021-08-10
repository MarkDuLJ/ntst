import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'

describe('products', () => {
  scenario('returns all products', async (scenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async () => {
    const result = await createProduct({
      input: {
        type: 'String4785310',
        name: 'String',
        description: 'String',
        price: 6079682.220319087,
        tag: 'String',
      },
    })

    expect(result.type).toEqual('String4785310')
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual(6079682.220319087)
    expect(result.tag).toEqual('String')
  })

  scenario('updates a product', async (scenario) => {
    const original = await product({ id: scenario.product.one.id })
    const result = await updateProduct({
      id: original.id,
      input: { type: 'String17160442' },
    })

    expect(result.type).toEqual('String17160442')
  })

  scenario('deletes a product', async (scenario) => {
    const original = await deleteProduct({ id: scenario.product.one.id })
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})
