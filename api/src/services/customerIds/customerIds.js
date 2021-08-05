import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const customerIds = () => {
  return db.customerId.findMany()
}

export const customerId = ({ id }) => {
  return db.customerId.findUnique({
    where: { id },
  })
}

export const createCustomerId = ({ input }) => {
  return db.customerId.create({
    data: input,
  })
}

export const updateCustomerId = ({ id, input }) => {
  return db.customerId.update({
    data: input,
    where: { id },
  })
}

export const deleteCustomerId = ({ id }) => {
  return db.customerId.delete({
    where: { id },
  })
}

export const CustomerId = {
  orders: (_obj, { root }) =>
    db.customerId.findUnique({ where: { id: root.id } }).orders(),
}
