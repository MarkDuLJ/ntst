import {
  orderdetails,
  orderdetail,
  createOrderdetail,
  updateOrderdetail,
  deleteOrderdetail,
} from './orderdetails'

describe('orderdetails', () => {
  scenario('returns all orderdetails', async (scenario) => {
    const result = await orderdetails()

    expect(result.length).toEqual(Object.keys(scenario.orderdetail).length)
  })

  scenario('returns a single orderdetail', async (scenario) => {
    const result = await orderdetail({ id: scenario.orderdetail.one.id })

    expect(result).toEqual(scenario.orderdetail.one)
  })

  scenario('creates a orderdetail', async (scenario) => {
    const result = await createOrderdetail({
      input: {
        prod_id: scenario.orderdetail.two.prod_id,
        oid: scenario.orderdetail.two.oid,
        quantity: 3316363,
      },
    })

    expect(result.prod_id).toEqual(scenario.orderdetail.two.prod_id)
    expect(result.oid).toEqual(scenario.orderdetail.two.oid)
    expect(result.quantity).toEqual(3316363)
  })

  scenario('updates a orderdetail', async (scenario) => {
    const original = await orderdetail({ id: scenario.orderdetail.one.id })
    const result = await updateOrderdetail({
      id: original.id,
      input: { quantity: 596113 },
    })

    expect(result.quantity).toEqual(596113)
  })

  scenario('deletes a orderdetail', async (scenario) => {
    const original = await deleteOrderdetail({
      id: scenario.orderdetail.one.id,
    })

    const result = await orderdetail({ id: original.id })

    expect(result).toEqual(null)
  })
})
