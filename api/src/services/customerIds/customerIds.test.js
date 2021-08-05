import {
  customerIds,
  customerId,
  createCustomerId,
  updateCustomerId,
  deleteCustomerId,
} from './customerIds'

describe('customerIds', () => {
  scenario('returns all customerIds', async (scenario) => {
    const result = await customerIds()

    expect(result.length).toEqual(Object.keys(scenario.customerId).length)
  })

  scenario('returns a single customerId', async (scenario) => {
    const result = await customerId({ id: scenario.customerId.one.id })

    expect(result).toEqual(scenario.customerId.one)
  })

  scenario('creates a customerId', async () => {
    const result = await createCustomerId({
      input: {
        first_name: 'String',
        last_name: 'String',
        Phone: 'String893521',
        Email: 'String913175',
        PostalCode: 'String',
      },
    })

    expect(result.first_name).toEqual('String')
    expect(result.last_name).toEqual('String')
    expect(result.Phone).toEqual('String893521')
    expect(result.Email).toEqual('String913175')
    expect(result.PostalCode).toEqual('String')
  })

  scenario('updates a customerId', async (scenario) => {
    const original = await customerId({ id: scenario.customerId.one.id })
    const result = await updateCustomerId({
      id: original.id,
      input: { first_name: 'String2' },
    })

    expect(result.first_name).toEqual('String2')
  })

  scenario('deletes a customerId', async (scenario) => {
    const original = await deleteCustomerId({ id: scenario.customerId.one.id })
    const result = await customerId({ id: original.id })

    expect(result).toEqual(null)
  })
})
