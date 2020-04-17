
![NodeJs + MongoDB + GraphQL Starter](https://raw.githubusercontent.com/ailoitte/node-mongodb-graphql-starter/master/public/node%2BmongoDB%2BGraphQL.png)


NodeJs + MongoDB + GraphQL Starter
----------------------------------
_A boilerplate for Node.js, MongoDB & GraphQL applications._

:bulb: ES6 code

I started this project to simplify and make it ease of use. I also tried to make it as generic and reusable as possible to cover most use cases of GraphQL apps, without being too specific. 


Table of Contents
-----------------
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Packages](#packages)
- [Query & Mutations](#query-mutation)

Features
--------

- **Local Authentication** using Email and Password
- MVC Project Structure
- GraphQL Mutations, Queries, Resolvers
- **Account Management**
     - Register
     - Login
     - Update profile
     - Profile Details
     - Add user address
     - Update Address
     - Remove Address
- Cron job scheduler
- JSON Web Token (JWT) Sign in


Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 6.0+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/ailoitte/node-mongodb-graphql-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.

Packages
--------

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.              |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| connect-mongo                   | MongoDB session store for Express.                                    |
| dotenv                          | Loads environment variables from .env file.                           |
| express                         | Node.js web framework.                                                |
| body-parser                     | Express 4 middleware.                                                 |
| morgan                          | Express 4 middleware.                                                 |
| mongoose                        | MongoDB ODM.                                                          |
| nodemailer                      | Node.js library for sending emails.                                   |
| request                         | Simplified HTTP request library.                                      |
| lodash                          | Handy JavaScript utilities library.                                   |
| validator                       | Used in conjunction with express-validator.                           |                                        
| jsonwebtoken                    | An implementation of JSON Web Tokens.                                 |                                        
| mongoose-paginate               | MongoDB mongoose pagination                                           |                                        
| moment                          | JS date library- parsing,validating,manipulating,andformatting dates. |
| mime                            | Comprehensive MIME type mapping API based on mime-db module.          |
| firebase-admin                  | Push notification                                                     |
| aws-sdk                         | AWS client SDK                                                        |
| multer-s3                       | Upload multipart to S3                                                |
| winston                         | async logging library                                                 |
| cron                            | Cron job                                                              |



Query & Mutation
----------------

![](https://raw.githubusercontent.com/ailoitte/node-mongodb-graphql-starter/master/public/graphiql.png)


### ADD USER

```
mutation {
  addUser(name: "Sunil Kumar", email: "sunilkumar707@yahoo.in", mobileNumber:"8867371492", password: "123567"){
    id
    name
    email
    mobileNumber
  }
}
```

### UPDATE

```
mutation {
  updateUser(name: "Ravi Sanker"){
    id
    name
    email
    mobileNumber
  }
}
```

### LOGIN

```
mutation {
  loginUser(mobileNumber: "8867371492", password:"1234567") {
    id
    token
    name
    email
  }
}
```

### ADD ADDRESS

```
mutation {
  addUserAddress(street: ["s1", "s2"], 
    city:"Dehradun", 
    countryId: "IN", 
    addressType: "home",
    postcode:"23455"
  ) {
    id
    street
    city
    countryId
    landmark
    locality
    addressType
    postcode
  }
}
```

### UPDATE ADDRESS

```
mutation {
  updateUserAddress(id: "59e4d803d3528728b99b3c53",
    street: ["Nesh", "Indra Road"], 
    city:"Dehradun", 
    countryId: "IN", 
    addressType: "home",
    postcode:"234551"
  ) {
    id
    street
    city
    countryId
    landmark
    locality
    addressType
    postcode
  }
}
```

### DELETE ADDRESS

```
mutation {
  deleteUserAddress(
   id: "59e4dc6b875e8829539b20d7"
  ){
    message
  }
}
```

### ALL ADDRESS

```
query {
  me{
    address{
      street
      city
    }
  }
}
```


### ADDRESS BY ID

```
query {
  userAddress(id: "59e4d803d3528728b99b3c53"){
    id
    city
    street
    countryId
  }
}
}
```