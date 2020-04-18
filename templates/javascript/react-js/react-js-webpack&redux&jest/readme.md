# react-redux-starter-kit
A starter kit with react 16, redux, jest and webpack 4.

[![Build Status](https://travis-ci.org/trembacz/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/trembacz/react-redux-starter-kit)
[![Dependencies](https://david-dm.org/trembacz/react-redux-starter-kit/status.svg)](https://david-dm.org/trembacz/react-redux-starter-kit?view=list) 
[![devDependencies](https://david-dm.org/trembacz/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/trembacz/react-redux-starter-kit?type=dev&view=list)


## Contains:

* Webpack 4 dev and production config
* Hot module replacement support
* Jest - unit testing framework
* ES6 - 7 Support with Babel
* ESlint - to keep your js readable
* Code spliting - separate vendor and React code
* Bundle Analyzer included (uncomment in webpack configuration files)

## Getting Started

**1. Clone the repository to your local machine by running:**

```bash
git clone git@github.com:trembacz/react-redux-starter-kit.git
cd react-redux-starter-kit
```

**2. Install all dependencies:**

```npm install``` or ```yarn install```

**3. Run the app:**

```npm run serve``` or ```yarn serve```

Run server on port 3000 with HMR enabled

**4. Build dev files:**

```npm run dev``` or ```yarn dev```

**5. Build production files:**

```npm run prod``` or ```yarn prod```

Building app in the "dist" directory. Contains the index.html with the minified assets, it's ready for production!.

## Run tests

```npm run test``` or ```yarn test```

This command will run tests and create a Coverage report under "coverage/lcov-report/index.html"

## Run tests --watch

Watch files for changes and rerun tests related to changed files.

```npm run test-watch``` or ```yarn test-watch```

## To run JSON mock api

Run fake REST server on port 3004

```npm run jsonapi``` or ```yarn jsonapi```

