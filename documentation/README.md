## Quicksi Official Website documentation

Quicksi helps developers to spend time adding features to their project instead of spending time setting.


### Contributing to this documentation

```bash

# go into the file
cd documents

# install the packages using yarn
yarn install

# start the server
yarn start

# A browser window will open up, pointing to the docs.
```

## New starters in any framework
At this point you have created and tested out the starter you want to contribute. If you haven't, check the documentation for [contribution](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) here

- Go into `versioned_docs` with the current version of Quicksi, search for the framework docs and programming language you used.

- Document your new starter inside.

- Start the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue



## New framework with a new starter
- Go into `versioned_docs` and create a new docs file, name should be formatted as:
`<name-of-the-framework>-<programming-language>`,

then add to the md file:
```bash
id: <name of framweork>
title: <name of files in  other starter>
original_id:  <name of files in  other starter>
```

- Then document the starter you just created

- Go into `Versioned_sidebars` with the specified version and add the ID you created on the doc file as a value to the array, under the programming language of the framework.

- Start or restart the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue


## Updates on the starters available
If your update on any project require an update on the documentation, follow this instruction:

- search for the project name in `versioned_docs`, under the current version of Quicksi

- Make your update to the documentation

- Start or restart the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue


## Copy of an existing starter but with a different code or folder structure

- Go into `versioned_docs` with the current version of quicksi, search for framework you created your starter on and a document your starter.

- Start the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue

## create a starter for a tutorial, or tech conference.

- Go into `versioned_docs` with the current `version` of quicksi, create a new docs
> follow this naming format

`tutorial-<your-name/or organization-name>`

***use your name or your organization name***

***If you already have an existing section already, add the new starter into the docs that has your identity, restart the server and go back to the quicksi cli, but if it's your first time, continue below***

- Document your starter inside this file, you can place links to your tutorial, or link to the github tutorial. But no advert is allowed. 

then add to the top of the md file:

```bash
id: <name of framweork>
title: <name of files in  other starter>
original_id:  <name of files in  other starter>
```
 
- Next go into `versioned_sidebars` of the current version and add to the tutorial array the `id` you created on the md file as a new value of the array.

***If you have created a new new 

- Start the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue

## Update Quicksi online documentation
- Search for the docs from `versioned_docs` with the current version of quicksi. 
- Make your update
- Start the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue

## Fix a bug on a Quicksi project
If your fix will require updating the documentation:

- Search for the docs from `versioned_docs` with the current version of quicksi. 
- Make your update
- Start the server and see if it has reflected.

- Go back to [Quicksi cli](https://github.com/AnayoOleru/quicksi/blob/master/CONTRIBUTING.md) to continue
