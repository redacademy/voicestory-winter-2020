type User {
    id: ID!
    username: String!
  }
  
  type Query {
    currentUser: User!
  }
  
  type Mutation {
    register(username: String!, password: String!): User!
    login(username: String!, password: String!): LoginResponse!
  }
  
  type LoginResponse {
    token: String
    user: User
  }