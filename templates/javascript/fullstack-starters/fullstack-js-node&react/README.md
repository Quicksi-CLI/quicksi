# <%= projectName %>🚀

## Features

- Node.js backend with Express
- Swagger API specification & validation
- MongoDB database
- React frontend
- Next generation JavaScript agnostic setup with Babel
- Multi-container Docker setup
- Handy Makefile commands for easy Docker orchestration
- Code style & code quality enforcement with ESLint & Prettier
- Mono-repo approach

### Quicksi Start

```bash

# run this command to spin up a database instance
make up
```

> This will spin up a database instance running on `localhost:27017`, a backend instance running on `localhost:1337` and a frontend instance running on `localhost:3000`. See `docker-compose.yml` for the detailed setup.
> You can specify also only a single service via `make up frontend`.

---

### Quicksi Test

To run all test just enter:

```bash

# run test in backend and frontend 
make test
```

> This will run all tests defined in the `backend` and `frontend` directories. See `docker-compose.ci.yml` for the detailed setup. Can ideally be used in your CI runners.

---

### Deploy

TBD.


## Run individually

```bash

# cd into frontend or the backend folder

# run npm install
npm i

# run the commands in their own scripts
```

[Give Quicksi a star on GitHub](https://github.com/AnayoOleru/quicksi)

`Remember Quicksi loves ♥️♥️♥️♥️ developers`

[Contribute to Quicksi](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md)