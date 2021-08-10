import { render } from '@redwoodjs/testing'

import Event from './Event'

describe('Event', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Event />)
    }).not.toThrow()
  })
})
