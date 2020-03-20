const bcrypt = require("bcryptjs");

const resolvers = {
  Mutation: {
    register: async (
      parent,
      { username, password, name, email },
      ctx,
      info
    ) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        username,
        password: hashedPassword,
        name: "Test Name",
        email: "testemailagain@gmail.com"
      });
      return user;
    }
  }
};

module.exports = resolvers;
