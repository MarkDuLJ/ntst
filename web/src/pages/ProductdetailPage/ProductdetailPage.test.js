import { render } from '@redwoodjs/testing'

import ProductdetailPage from './ProductdetailPage'

describe('ProductdetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductdetailPage />)
    }).not.toThrow()
  })
})
