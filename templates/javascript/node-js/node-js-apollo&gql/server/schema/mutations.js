import types from "./types";
export default `
  type Mutation {
    addCategory(categoryName: String): [Category!]
  }
`;
