import { gql } from 'apollo-server-express';
import _ from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import { TypeDefsCommon } from './base';

import {
    typeDef as MarketingTypeDef,
    resolvers as marketingResolvers,
  } from './demo/schema';

export default () => {

    const Query = gql(`
      type Query {
          hello: String,
      },
    `);
    const resolvers = {
        Query: {
            hello: () => 'string',
        },
    };
    return makeExecutableSchema({
        typeDefs: [
            TypeDefsCommon,
            MarketingTypeDef,
            Query,
        ],
        resolvers: _.merge(
            resolvers,
            marketingResolvers()
        )
    });
};
