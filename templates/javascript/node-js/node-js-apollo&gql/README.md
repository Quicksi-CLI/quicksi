[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/javascript/node-js/node-js-apollo%26gql.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/javascript/node-js/node-js-apollo%26gql)


# Node JS Apollo, GraphQL, PostgreSQL and Sequelize

You need Postgres running on your machine. 
Set the configuration/credentials in the `server/config/config.json` file.

# Get Started

`cd <%= projectName %>`
`yarn install`
`yarn setup` - This runs 3 other commands in the package.json:

- Creates a new Postgres database (You need to have Postgres running locally for this to work).
- Runs migrations to create the demo tables: Locations, Categories and their join table.
- Runs seeders to populate these tables for demo purposes.

`yarn start` - Start your express server which servers your graphql playground at [http://localhost:4000/graphql](http://localhost:4000/graphql)


[Give Quicksi a star on GitHub](https://github.com/AnayoOleru/quicksi)

`Remember Quicksi loves ♥️♥️♥️♥️ developers`

[Contribute to Quicksi](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md)