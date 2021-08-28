import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import KnowledgeBasicsCell from 'src/components/KnowledgeBasicsCell'
import SearchtagCell from 'src/components/SearchtagCell'

const ArticlePage = () => {
  const [search, setSearch] = useState('')
  const onSubmit = ({ search }) => {
    let a = search.toLowerCase()
    setSearch(a)
  }

  return (
    <>
      <div className="mx-auto text-center">
        <Form onSubmit={onSubmit} className="flex justify-center p-6 flex-wrap">
          <TextField
            className="text-xl w-96 p-3 text-center border-2 shadow-md "
            name="search"
            placeholder="Input tags, only letters allowed"
            validation={{ required: true, pattern: { value: /[a-zA-Z]/ } }}
          />
          <Submit className="p-3 bg-ntst-blue text-center text-ntst-white ml-3 rounded hover:bg-ntst-white hover:text-ntst-blue">
            Search
          </Submit>
        </Form>
      </div>

      {search && <SearchtagCell tag={search} />}
      <KnowledgeBasicsCell tag={search} />
    </>
  )
}

export default ArticlePage
