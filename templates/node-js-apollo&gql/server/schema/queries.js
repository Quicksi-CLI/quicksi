import types from "./types";
export default `
  type Query {
    categories: [Category!],
    locations(categoryId: Int): [Category!]
  }
`;
