import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import {cache} from './ApolloCache';
import {GRAPH_ENDPOINT} from "_utils/env";

const link = new HttpLink({
    uri: GRAPH_ENDPOINT
});

export const client = new ApolloClient({
    cache,
    link
});
