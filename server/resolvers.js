const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers = {
  Mutation: {
    register: async (parent, { username, password }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        username,
        password: hashedPassword
      });
      return user;
    },
    login: async (parent, { username, password }, ctx, info) => {
      const user = await ctx.prisma.user({ username });

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
          username: user.email
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
