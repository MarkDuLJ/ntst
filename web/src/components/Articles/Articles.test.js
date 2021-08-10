import { render } from '@redwoodjs/testing'

import Articles from './Articles'

describe('Articles', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Articles />)
    }).not.toThrow()
  })
})
