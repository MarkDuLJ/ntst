export const schema = gql`
  type Order {
    order_id: Int!
    order_date: DateTime!
    customers: CustomerID!
    cus_id: Int!
    orderd: OrderDetails
  }

  type Query {
    orders: [Order!]!
    order(id: Int!): Order
  }

  input CreateOrderInput {
    order_id: Int!
    order_date: DateTime!
    cus_id: Int!
  }

  input UpdateOrderInput {
    order_id: Int
    order_date: DateTime
    cus_id: Int
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    updateOrder(id: Int!, input: UpdateOrderInput!): Order!
    deleteOrder(id: Int!): Order!
  }
`
