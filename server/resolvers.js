const bcrypt = require("bcryptjs");

const resolvers = {
  Mutation: {
    register: async (parent, { username, password }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        username,
        password: hashedPassword
      });
      return user;
    }
  }
};
