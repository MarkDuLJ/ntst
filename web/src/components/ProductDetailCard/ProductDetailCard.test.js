import { render } from '@redwoodjs/testing'

import ProductDetailCard from './ProductDetailCard'

describe('ProductDetailCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductDetailCard />)
    }).not.toThrow()
  })
})
