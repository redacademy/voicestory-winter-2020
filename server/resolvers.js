const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    currentUser: (parent, args, { user, prisma }) => {
      // this if statement is our authentication check
      if (!user) {
        throw new Error("Not Authenticated");
      }
      return prisma.user({ id: user.id });
    }
  },
  Mutation: {
    register: async (parent, { email, password }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        email,
        password: hashedPassword,
        name: "Test Name"
      });
      return user;
    },
    login: async (parent, { email, password }, ctx, info) => {
      const user = await ctx.prisma.user({ email });

      if (!user) {
        throw new Error("Invalid Login");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Invalid Login");
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        "my-secret-from-env-file-in-prod",
        {
          expiresIn: "30d" // token will expire in 30days
        }
      );
      return {
        token,
        user
      };
    }
  }
};

module.exports = resolvers;
