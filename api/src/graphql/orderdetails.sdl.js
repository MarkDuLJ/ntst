export const schema = gql`
  type Orderdetail {
    orderitem_id: Int!
    products: Product!
    prod_id: Int!
    order: Order!
    oid: Int!
    quantity: Int!
  }

  type Query {
    orderdetails: [Orderdetail!]!
    orderdetail(id: Int!): Orderdetail
  }

  input CreateOrderdetailInput {
    orderitem_id: Int!
    prod_id: Int!
    oid: Int!
    quantity: Int!
  }

  input UpdateOrderdetailInput {
    orderitem_id: Int
    prod_id: Int
    oid: Int
    quantity: Int
  }

  type Mutation {
    createOrderdetail(input: CreateOrderdetailInput!): Orderdetail!
    updateOrderdetail(id: Int!, input: UpdateOrderdetailInput!): Orderdetail!
    deleteOrderdetail(id: Int!): Orderdetail!
  }
`
