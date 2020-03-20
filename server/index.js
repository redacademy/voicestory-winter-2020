const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const { prisma } = require("./generated/prisma-client/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: ({ req }) => {
//       const tokenWithBearer = req.headers.authorization || “”;
//       const token = tokenWithBearer.split(” “)[1];
//       const user = getUser(token);
//       return {
//         user,
//         prisma
//       };
//     }
//   });
server
  .listen({
    port: 8383
  })
  .then(info => console.log(`Server started on http://localhost:${info.port}`));
