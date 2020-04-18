import 'reflect-metadata';
import '@tsed/swagger';
import "@tsed/typeorm";
import "@tsed/ajv";

import * as Path from 'path';
import * as dotenv from 'dotenv';
import * as logger from 'morgan';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

dotenv.config({ path: '.env' });

import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from 'ts-express-decorators';
import { $log } from 'ts-log-debug';

const rootDir = Path.resolve(__dirname);
@ServerSettings({
    rootDir,
    ajv: {
        errorFormat: (error) => `At ${error.modelName}${error.dataPath}, value '${error.data}' ${error.message}`,
        options: { verbose: true }
    },
    mount: {
        '/v1': `${rootDir}/controllers/**/**.controller.{ts,js}`
    },
    componentsScan: [
        `${rootDir}/services/**/**.service.{ts,js}`,
        `${rootDir}/middlewares/**/**.{ts,js}`
    ],
    httpPort: process.env.PORT || 3000,
    httpsPort: false,
    acceptMimes: ['application/json'],
    swagger: {
        path: '/api-docs'
    },
    typeorm: [
        {
            name: 'default',
            type: "sqlite",
            database: `./data/default.sqlite`,
            entities: [
                `${__dirname}/data/models/entities/**/*{.ts,.js}`
            ],
            migrations: [
                `${__dirname}/data/migrations/**/*{.ts,.js}`
            ],
            synchronize: true,
            migrationsRun: true,
            logging: true
        }
    ]
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the middleware required by your application to works.
     * @returns {Server}
     */
    public async $onMountingMiddlewares(): Promise<any> {
        this
            .use(GlobalAcceptMimesMiddleware)
            .use(bodyParser())
            .use(compression())
            .use(express())
            .use(logger('dev'))
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));

        return null;
    }

    async $onInit(): Promise<any> {
    }

    public $onReady() {
        $log.info('Server started...');
    }

    public $onServerInitError(err) {
        $log.error(err);
    }
}