---
id: version-1.0.2-Node-JS
title: Node-JS
original_id: Node-JS
---

Below are the Quicksi Node JavaScript starters, starter name, folder structures, and dependencies.

<img alt="Typescript" src="/img/nodejs.png" width= "100%" class="docImage"/>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/AnayoOleru/quicksi/issues)

## node-js-babel 
[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-babel.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-babel) 


> Generate a nodejs project with babel transpiler already set up for you.

```bash
# starter dependencies
  "devDependencies": {
    "nodemon": "^1.18.10",
    "eslint": "^6.1.0",
    "eslint-config-airbnb": "^18.0.1"
  },
  "dependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.4.0",
    "@babel/node": "^7.2.2",
    "@babel/plugin-transform-runtime": "^7.4.0",
    "@babel/polyfill": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "@babel/register": "^7.9.0",
    "express": "^4.16.4",
    "yarn": "^1.15.2",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0"
  },
```

### Features
- `Node.js` and `ExpressJS` for the backend
- `Babel` transcompiler to compile to backwards version of Javascript
- `Eslint` for linting
- With some basic utilities already configured
- Use cors already configured
- Simple server setup


*After generating this starter, you code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-babel)

***starter name***

```bash
# starter name

    node-js-babel 
```




## node-js-mocha&chai 
[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-mocha%26chai.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-mocha%26chai) 


> Generate a node js project with babel transpiler and mocha and chai for asynchronous testing and coverage reports

```bash
# starter dependencies

  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^7.1.1",
    "nodemon": "^1.18.10",
    "eslint": "^6.1.0",
    "eslint-config-airbnb": "^18.0.1"
  },
  "dependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.4.0",
    "@babel/node": "^7.2.2",
    "@babel/plugin-transform-runtime": "^7.4.0",
    "@babel/polyfill": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "@babel/register": "^7.9.0",
    "express": "^4.16.4",
    "yarn": "^1.15.2",
    "cors": "^2.8.5",
    "dotenv": "^7.0.0"
  },
```

### Features
- `Node.js` and `ExpressJS` for the backend
- `Babel` transcompiler to compile to backwards version of Javascript
- `Eslint` for linting
- With some basic utilities already configured
- Use `cors` already configured
- Simple server setup
- `Mocha` and `Chai` configured
- Simple passing test setup

*After generating this starter, you code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-mocha%26chai)

***starter name***

```bash
# starter name

    node-js-mocha&chai 
```

## node-js-mongo
[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-mongo.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-mongo) 


> Generates a nodeJs project with mongo DB, Docker, linting with eslint, code formatter with Prettierc, coverage with coveralls, and travis, already configured and for you

```bash
# starter dependencies
  "dependencies": {
    "@hapi/joi": "^17.1.0",
    "bcryptjs": "^2.4.3",
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "cross-env": "^7.0.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-mongo-sanitize": "^1.3.2",
    "express-rate-limit": "^5.0.0",
    "helmet": "^3.21.2",
    "http-status": "^1.4.0",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.15",
    "moment": "^2.24.0",
    "mongoose": "^5.7.7",
    "morgan": "^1.9.1",
    "nodemailer": "^6.3.1",
    "passport": "^0.4.0",
    "passport-jwt": "^4.0.0",
    "pm2": "^4.1.2",
    "validator": "^12.0.0",
    "winston": "^3.2.1",
    "xss-clean": "^0.1.1"
  },
  "devDependencies": {
    "coveralls": "^3.0.7",
    "eslint": "^6.6.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-config-prettier": "^6.4.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^23.0.2",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-security": "^1.4.0",
    "faker": "^4.1.0",
    "husky": "^4.2.3",
    "jest": "^25.1.0",
    "lint-staged": "^10.0.7",
    "node-mocks-http": "^1.8.0",
    "nodemon": "^2.0.0",
    "prettier": "^1.18.2",
    "supertest": "^4.0.2"
  }
```

### Features
- `Node.js` for the backend
- NoSQL database: `MongoDB`
- Object data modeling using `Mongoose`
- Authentication and authorization using `Passport`
- validation with `Joi`
- Logging with `Morgan` and `Winston`
- Test using `Jest`
- Centralized error handling mechanism
- Advanced production process management using `PM2`
- Dependency management with `yarn`
- Environment variables with `Dotenv` and `cross-env`
- Security using `helmet`
- `CORS` enabled
- gzip Compression with `Compression`
- CI with `travis`
- `Docker` support
- Linting with `ESlint` and `Prettierc`
- Consistent editor configuration using `EditorConfig`

*After generating this starter, you code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-mongo)

***starter name***

```bash
# starter name

    node-js-mongo
```

## node-js-mongo&gql 
[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-mongo%26gql.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-mongo%26gql)


> Generates a nodeJS GraphQL project with mongoDB.

```bash
# starter dependencies

  "devDependencies": {
    "@babel/core": "^7.7.7",
    "@babel/node": "^7.7.7",
    "@babel/preset-env": "^7.7.7",
    "babel-eslint": "^10.0.3",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.9.0",
    "eslint-config-wesbos": "0.0.19",
    "eslint-plugin-html": "^6.0.0",
    "eslint-plugin-import": "^2.19.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.17.0",
    "eslint-plugin-react-hooks": "^2.3.0",
    "nodemon": "^2.0.2",
    "prettier": "^1.19.1"
  },
  "dependencies": {
    "await-to-js": "^2.1.1",
    "dotenv": "^8.2.0",
    "graphql-yoga": "^1.18.3",
    "mongoose": "^5.8.4",
    "validator": "^12.1.0"
  }
```

### Features
- `Node.js` and `ExpressJS` for the backend
- `GraphQL` architecture
- NoSQL database: `MongoDB`
- Object data modeling using `Mongoose`
- Environment variables with `Dotenv`
- Linting with `ESlint` and `Prettierc`

*After generating this starter, you code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-mongo%26gql)

***starter name***

```bash
# starter name

    node-js-mongo&gql 
```


## node-js-apollo&gql 
[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-apollo%26gql.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-apollo%26gql)


> Generates a nodeJS GraphQL, Apollo-server-express, PostgreSQL and Sequelize project.

```bash
# starter dependencies

  "dependencies": {
    "apollo-server-express": "^2.1.0",
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-2": "^6.24.1",
    "express": "^4.16.4",
    "graphql": "^14.0.2",
    "graphql-tools": "^4.0.3",
    "nodemon": "^1.18.4",
    "pg": "^7.4.3",
    "sequelize": "^4.38.0",
    "sequelize-cli": "5.4.0"
  }
```

### Features
- `Node.js`  and `ExpressJS` for the backend
- `GraphQL` and `Apollo` architecture
- SQL database `PostgreSQL` and `Sequelize`


*After generating this starter, you code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-apollo%26gql)

***starter name***

```bash
# starter name

    node-js-apollo&gql 
```


## node-js-pg&sequelize 
[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-pg%26sequelize.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-pg%26sequelize)

> Generates a nodeJS project, with postgreSQL, Sequelize and mocha and chai for testing.

```bash
# starter dependencies

  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^7.1.1",
    "nodemon": "^1.18.10",
    "eslint": "^6.1.0",
    "eslint-config-airbnb": "^18.0.1"
  },
  "dependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.4.0",
    "@babel/node": "^7.2.2",
    "@babel/plugin-transform-runtime": "^7.4.0",
    "@babel/polyfill": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "@babel/register": "^7.9.0",
    "express": "^4.16.4",
    "yarn": "^1.15.2",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "sequelize": "^5.21.0",
    "sequelize-cli": "^5.5.1",
    "pg": "^7.12.1",
    "pg-hstore": "^2.3.3",
    "rimraf": "^3.0.0"
  },
```

### Features
- `Node.js`  and `ExpressJS` for the backend
- REST architecture
- SQL database `PostgreSQL` and `Sequelize`
- `Mocha` and `Chai` for testing
- `Babel` transcompiler
- Linting with `ESlint` and `Prettierc`

*After generating this starter, you code will look like this*
[View here](https://github.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-pg%26sequelize)

***starter name***

```bash
# starter name

    node-js-pg&sequelize 
```