export const schema = gql`
  type Category {
    category_id: Int!
    category_name: String!
    notes: String!
    products: [Product]!
  }

  type Query {
    categories: [Category!]!
    category(id: Int!): Category
  }

  input CreateCategoryInput {
    category_id: Int!
    category_name: String!
    notes: String!
  }

  input UpdateCategoryInput {
    category_id: Int
    category_name: String
    notes: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
    deleteCategory(id: Int!): Category!
  }
`
