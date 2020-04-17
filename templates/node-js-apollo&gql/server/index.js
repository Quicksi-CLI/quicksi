import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import db from "./models";
import cors from "cors";
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Quicksi project server ready at http://localhost:4000${server.graphqlPath}`)
);
