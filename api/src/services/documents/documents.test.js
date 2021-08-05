import {
  documents,
  document,
  createDocument,
  updateDocument,
  deleteDocument,
} from './documents'

describe('documents', () => {
  scenario('returns all documents', async (scenario) => {
    const result = await documents()

    expect(result.length).toEqual(Object.keys(scenario.document).length)
  })

  scenario('returns a single document', async (scenario) => {
    const result = await document({ id: scenario.document.one.id })

    expect(result).toEqual(scenario.document.one)
  })

  scenario('creates a document', async () => {
    const result = await createDocument({
      input: { text: 'String' },
    })

    expect(result.text).toEqual('String')
  })

  scenario('updates a document', async (scenario) => {
    const original = await document({ id: scenario.document.one.id })
    const result = await updateDocument({
      id: original.id,
      input: { text: 'String2' },
    })

    expect(result.text).toEqual('String2')
  })

  scenario('deletes a document', async (scenario) => {
    const original = await deleteDocument({ id: scenario.document.one.id })
    const result = await document({ id: original.id })

    expect(result).toEqual(null)
  })
})
