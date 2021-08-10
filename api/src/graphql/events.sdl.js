export const schema = gql`
  type Event {
    id: Int!
    title: String!
    description: String!
    imgUrl: String!
    createAt: DateTime!
  }

  type Query {
    events: [Event!]!
    event(id: Int!): Event
  }

  input CreateEventInput {
    title: String!
    description: String!
    imgUrl: String!
    createAt: DateTime!
  }

  input UpdateEventInput {
    title: String
    description: String
    imgUrl: String
    createAt: DateTime
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event!
    updateEvent(id: Int!, input: UpdateEventInput!): Event!
    deleteEvent(id: Int!): Event!
  }
`
