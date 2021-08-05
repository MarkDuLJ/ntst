export const schema = gql`
  type CustomerId {
    customer_id: Int!
    first_name: String!
    last_name: String!
    Phone: String!
    Email: String!
    PostalCode: String!
    orders: [Order]!
  }

  type Query {
    customerIds: [CustomerId!]!
    customerId(id: Int!): CustomerId
  }

  input CreateCustomerIdInput {
    customer_id: Int!
    first_name: String!
    last_name: String!
    Phone: String!
    Email: String!
    PostalCode: String!
  }

  input UpdateCustomerIdInput {
    customer_id: Int
    first_name: String
    last_name: String
    Phone: String
    Email: String
    PostalCode: String
  }

  type Mutation {
    createCustomerId(input: CreateCustomerIdInput!): CustomerId!
    updateCustomerId(id: Int!, input: UpdateCustomerIdInput!): CustomerId!
    deleteCustomerId(id: Int!): CustomerId!
  }
`
