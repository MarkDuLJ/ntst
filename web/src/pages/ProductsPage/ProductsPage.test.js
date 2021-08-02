import { render } from '@redwoodjs/testing'

import ProductsPage from './ProductsPage'

describe('ProductsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductsPage />)
    }).not.toThrow()
  })
})
