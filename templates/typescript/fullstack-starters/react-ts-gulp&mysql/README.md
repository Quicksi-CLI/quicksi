# <%= projectName %>

[![HitCount](http://hits.dwyl.com/AnayoOleru/quicksi/ree/master/templates/typescript/fullstack-starters/react-ts-gulp%26mysql.svg)](http://hits.dwyl.com/AnayoOleru/quicksi/tree/master/templates/typescript/fullstack-starters/react-ts-gulp%26mysql)

- [x] server back-end in typescript
- [x] react starter kit in javascript & typescript (delete the one you don't want to use)
- [x] db-migrate for database migration management
- [x] file watcher

## How to use

```bash

npm install
```

* Setup the project
```bash
# only if you want to use javascript:
rm -r ./app/client-ts
# only if you want to use typescript:
rm -r ./app/client-js
# rename the other folder
mv ./app/client-* ./app/client
``` 

* Edit db file `database.json` with your configuration (example below)
```json
{
    "dev": {
        "driver": "mysql",
        "user": "db_user",
        "database": "db_name",
        "password": "dn_password",
        "multipleStatements": true
    }
}
```

* If you want to use something else than mysql, edit the `.db-migraterc` and `database.json` files.

## How to start

Just run 

```bash
npm start
```

It will build the app, launch the server and watch for file changes


[Give Quicksi a star on GitHub](https://github.com/AnayoOleru/quicksi)

`Remember Quicksi loves ♥️♥️♥️♥️ developers`

[Contribute to Quicksi](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md)