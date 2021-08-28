import { render } from '@redwoodjs/testing'

import EventDetailCard from './EventDetailCard'

describe('EventDetailCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventDetailCard />)
    }).not.toThrow()
  })
})
