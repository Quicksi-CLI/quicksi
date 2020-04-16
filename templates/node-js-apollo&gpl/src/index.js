import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
// import config from './config';
// import schema from './schema';
// import DemoApi from './schema/demo/api';
// import middleware from './middleware/index';
import format from 'string-format';
import { RedisCache } from 'apollo-server-cache-redis';


format.extend(String.prototype, {});

const app = express();

app.server = http.createServer(app);
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

console.log('ENGINE_API_KEY: ', config.settings.appolloEngineAppKey);
console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('USE_REDIS: ', process.env.USE_REDIS);
console.log('CONFIG: ', JSON.stringify(config));

app.use(middleware({ config }));

const server = new ApolloServer({
    schema: schema({ config }),
    engine: {
        apiKey: config.settings.appolloEngineAppKey
    },
    introspection: true,
    playground: config.settings.playground,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    },
    cache: process.env.USE_REDIS ? new RedisCache({
        host: config.settings.redis.host,
    }) : null,
    dataSources: () => ({
        demoApi: new DemoApi(),
    }),
    context: ({ req }) => {
        const token = req.headers.authorization;
        const whoami = req.headers.whoami;
        const version = req.headers.version;
        const platform = req.headers.platform;
        return {
            token,
            whoami,
            settings: config.settings,
            api: config.api,
            constant: config.constant,
            version,
            platform
        };
    },
});
server.applyMiddleware({ app, /* path: '/graphql/v1' */ });

app.server.listen(8080, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
