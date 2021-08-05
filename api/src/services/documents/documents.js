import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const documents = () => {
  return db.document.findMany()
}

export const document = ({ id }) => {
  return db.document.findUnique({
    where: { id },
  })
}

export const createDocument = ({ input }) => {
  return db.document.create({
    data: input,
  })
}

export const updateDocument = ({ id, input }) => {
  return db.document.update({
    data: input,
    where: { id },
  })
}

export const deleteDocument = ({ id }) => {
  return db.document.delete({
    where: { id },
  })
}
