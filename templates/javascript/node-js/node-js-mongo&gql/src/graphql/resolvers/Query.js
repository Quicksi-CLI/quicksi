const Query = {
  users: async (parent, args, ctx) => {
    const users = await ctx.models.User.find({});
    return users;
  },
};

export default Query;
