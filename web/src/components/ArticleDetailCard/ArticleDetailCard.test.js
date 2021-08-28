import { render } from '@redwoodjs/testing'

import ArticleDetailCard from './ArticleDetailCard'

describe('ArticleDetailCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleDetailCard />)
    }).not.toThrow()
  })
})
