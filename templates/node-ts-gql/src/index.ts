import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const typeDefs = 'src/schemas.graphql';

const server = new GraphQLServer({ typeDefs, resolvers: resolvers as any });
server.start(() => console.log('Server is running on http://localhost:4000'));