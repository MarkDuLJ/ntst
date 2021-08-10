import { render } from '@redwoodjs/testing'

import Article from './Article'

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article />)
    }).not.toThrow()
  })
})
