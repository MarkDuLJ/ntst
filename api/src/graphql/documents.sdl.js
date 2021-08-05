export const schema = gql`
  type Document {
    doc_id: Int!
    text: String!
  }

  type Query {
    documents: [Document!]!
    document(id: Int!): Document
  }

  input CreateDocumentInput {
    doc_id: Int!
    text: String!
  }

  input UpdateDocumentInput {
    doc_id: Int
    text: String
  }

  type Mutation {
    createDocument(input: CreateDocumentInput!): Document!
    updateDocument(id: Int!, input: UpdateDocumentInput!): Document!
    deleteDocument(id: Int!): Document!
  }
`
