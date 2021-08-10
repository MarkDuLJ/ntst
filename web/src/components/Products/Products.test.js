import { render } from '@redwoodjs/testing'

import Products from './Products'

describe('Products', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Products />)
    }).not.toThrow()
  })
})
