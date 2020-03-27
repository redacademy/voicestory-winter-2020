const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type Query {
    currentUser: User!
  }

  type Mutation {
    register(email: String!, password: String!, name: String!): User!
    login(email: String!, password: String!): LoginResponse!
  }

  type LoginResponse {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
