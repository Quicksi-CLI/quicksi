import { makeExecutableSchema } from "graphql-tools";
import mutations from "./mutations";
import queries from "./queries";
import types from "./types";

export default types.concat(queries, mutations);
