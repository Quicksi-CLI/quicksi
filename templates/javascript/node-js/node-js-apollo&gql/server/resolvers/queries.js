export default {
  categories: (parent, args, { db }, info) => {
    return db.Categories.findAll();
  },

  locations: (parent, args, { db }, info) => {
    const where = args.categoryId ? { id: args.categoryId } : {};
    return db.Locations.findAll({
      include: [
        {
          model: db.Categories,
          attributes: ["name"],
          where
        }
      ]
    });
  }
};
