import { render } from '@redwoodjs/testing'

import Product from './Product'

describe('Product', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Product />)
    }).not.toThrow()
  })
})
