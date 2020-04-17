# <%= projectName %>

The current application server is under development please use with caution.
The current readme file, documentation and code is still work in progress.
Contributions are welcome.

## Getting started

`cd <%= projectName %>`

`npm i` - if there was an error installing the dependencies

Create a ```.env``` file and add your JWT secret:
```
SECRET=secret_key_here
```

```
npm start
```

The application server is assembled from:
- [typescript](https://www.typescriptlang.org/) as typed superset of Javascript
- [express](https://expressjs.com/) as web framework
- [ts.ed](http://tsed.io/) as typescript framework on top of Express
- [sqlLite](https://www.sqlite.org/index.html) for data storage
- [passportjs](http://www.passportjs.org) as authentication middleware


## Usage

By default the server will start on port ```3000``` with a default admin user: ```admin@localhost.com/pass123```

Swagger is available at the [```http://localhost:3000/api-docs```](http://localhost:3000/api-docs)

Sample login curl:
```
curl -X POST \
  http://localhost:3000/v1/auth/login \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: cdf47e09-d2d3-4ba7-8067-55ee03f9fd6b' \
  -H 'cache-control: no-cache' \
  -d '{"email": "admin@localhost.com", "password": "pass123"}'
  ```

  After a succesfull login you will get in return the user, list of available claims for that user and the JWT token to use for further requests:

  ```
{
    "user": {
        "id": 1,
        "firstName": "admin",
        "lastName": "admin",
        "email": "admin@localhost.com"
    },
    "claims": [
        "can_do_everything",
        "can_create_users"
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBsb2NhbGhvc3QuY29tIiwiY2xhaW1zIjpbImNhbl9kb19ldmVyeXRoaW5nIiwiY2FuX2NyZWF0ZV91c2VycyJdLCJpYXQiOjE1NDY4Njk0NzV9.NqW7MhcjOpRTJOeUyNcl4O3K1qoaGvkhElvNHZIMWsE"
}
  ```

  In order to test your api you can use the echo admin endpoint
  ```
  curl -X PUT \
  http://localhost:3000/v1/admin/echo \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 2f464eb1-9029-416a-b11c-73786a8576ca' \
  -H 'accept: application/json' \
  -H 'cache-control: no-cache' \
  -H 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBsb2NhbGhvc3QuY29tIiwiY2xhaW1zIjpbImNhbl9kb19ldmVyeXRoaW5nIiwiY2FuX2NyZWF0ZV91c2VycyJdLCJpYXQiOjE1NDY4Njk0NzV9.NqW7MhcjOpRTJOeUyNcl4O3K1qoaGvkhElvNHZIMWsE' \
  -d '{ "echo": true}'
  ```
