import {
  categories,
  category,
  createCategory,
  updateCategory,
  deleteCategory,
} from './categories'

describe('categories', () => {
  scenario('returns all categories', async (scenario) => {
    const result = await categories()

    expect(result.length).toEqual(Object.keys(scenario.category).length)
  })

  scenario('returns a single category', async (scenario) => {
    const result = await category({ id: scenario.category.one.id })

    expect(result).toEqual(scenario.category.one)
  })

  scenario('creates a category', async () => {
    const result = await createCategory({
      input: { category_name: 'String2168293', notes: 'String' },
    })

    expect(result.category_name).toEqual('String2168293')
    expect(result.notes).toEqual('String')
  })

  scenario('updates a category', async (scenario) => {
    const original = await category({ id: scenario.category.one.id })
    const result = await updateCategory({
      id: original.id,
      input: { category_name: 'String8173442' },
    })

    expect(result.category_name).toEqual('String8173442')
  })

  scenario('deletes a category', async (scenario) => {
    const original = await deleteCategory({ id: scenario.category.one.id })
    const result = await category({ id: original.id })

    expect(result).toEqual(null)
  })
})
