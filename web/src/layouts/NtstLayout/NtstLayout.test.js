import { render } from '@redwoodjs/testing'

import NtstLayout from './NtstLayout'

describe('NtstLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NtstLayout />)
    }).not.toThrow()
  })
})
