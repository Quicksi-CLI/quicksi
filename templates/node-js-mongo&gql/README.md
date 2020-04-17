# <%= projectName %>

## Get Started
`cd <%= projectName %>`
`npm update` - Some of the packages are the old versions, we try to update this versions every Friday, put they could be a new version before then, please do update.

**Note:** If you come across a breaking change in a major dependency update and
happen to fix it, please submit a PR with your fix. On the other hand if for
some reason you couldn't fix it, please raise a Bug Report Issue.

`npm install` - Install the packages, they're automatically installed, but to avoid errors do well to install again after quicksi completes.


### Setup MongoDB via MongoDB Atlas
1. [Create an Atlas Account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/#create-an-service-account)
2. [Deploy a Free Tier Cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)
3. [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/)
4. [Create a MongoDB User for Your Cluster](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/)

Once your Cluster and MongoDB User are created, you can get your **Connection String** from the Connect Menu, and add it to your `.env` file. See [Connect Your Application](https://docs.atlas.mongodb.com/driver-connection/#connect-your-application) for more
information.

### Sample .env
```
  API_PORT=4000
  DATABASE=<mongodb-connection-string>
  FRONTEND_URL=<front-end-url>
```

## Usage
### Running in Development
```bash
  $ npm start
```

### GraphQL Playground
`http://localhost:4000/playground`

### GraphQL Endpoint
`http://localhost:4000/graphql`

### Sample Schema and Resolvers
This project has a sample `User` GraphQL Schema, Data Model and Resolvers.
Follow these instructions above to seed the database with sample users to get started.

#### Populate Database Contents
```bash
  $ npm run load:sampledata
```

#### Delete Database Contents
```bash
  $ npm run del:sampledata
```
