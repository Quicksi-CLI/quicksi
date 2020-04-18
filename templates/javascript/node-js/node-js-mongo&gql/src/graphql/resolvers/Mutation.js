import to from 'await-to-js';
import normalizeEmail from 'validator/lib/normalizeEmail';

const Mutation = {
  createUser: async (parent, args, ctx, info) => {
    // sanitize the email address input
    const sanitizedEmail = normalizeEmail(args.email, {
      gmail_remove_dots: false,
      gmail_remove_subaddress: false,
      remove_extension: false,
    });

    // check if a user with this email address already exists.
    const existingUser = await ctx.models.User.findOne({
      email: sanitizedEmail,
    });
    if (existingUser) {
      throw new Error('🙅  A user with that email address already exists');
    }

    // create a new user
    const newUser = new ctx.models.User({
      email: sanitizedEmail,
      username: args.username,
    });

    const [err, user] = await to(newUser.save());
    if (err) {
      throw new Error(`🚨  Saving new user error -> ${err.message}`);
    }
    return user;
  },
};

export default Mutation;
