import { render } from '@redwoodjs/testing'

import Events from './Events'

describe('Events', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Events />)
    }).not.toThrow()
  })
})
