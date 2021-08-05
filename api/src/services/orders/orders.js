import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const orders = () => {
  return db.order.findMany()
}

export const order = ({ id }) => {
  return db.order.findUnique({
    where: { id },
  })
}

export const createOrder = ({ input }) => {
  return db.order.create({
    data: input,
  })
}

export const updateOrder = ({ id, input }) => {
  return db.order.update({
    data: input,
    where: { id },
  })
}

export const deleteOrder = ({ id }) => {
  return db.order.delete({
    where: { id },
  })
}

export const Order = {
  customers: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).customers(),
  orderd: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).orderd(),
}
