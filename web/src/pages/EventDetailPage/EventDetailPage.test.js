import { render } from '@redwoodjs/testing'

import EventDetailPage from './EventDetailPage'

describe('EventDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventDetailPage />)
    }).not.toThrow()
  })
})
