import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const orderdetails = () => {
  return db.orderdetail.findMany()
}

export const orderdetail = ({ id }) => {
  return db.orderdetail.findUnique({
    where: { id },
  })
}

export const createOrderdetail = ({ input }) => {
  return db.orderdetail.create({
    data: input,
  })
}

export const updateOrderdetail = ({ id, input }) => {
  return db.orderdetail.update({
    data: input,
    where: { id },
  })
}

export const deleteOrderdetail = ({ id }) => {
  return db.orderdetail.delete({
    where: { id },
  })
}

export const Orderdetail = {
  products: (_obj, { root }) =>
    db.orderdetail.findUnique({ where: { id: root.id } }).products(),
  order: (_obj, { root }) =>
    db.orderdetail.findUnique({ where: { id: root.id } }).order(),
}
