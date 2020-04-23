# Contributing
First off, thank you so much for taking the time to contribute. All contributions are more than welcome!

Quicksi calls contributors *Superheroes🦸‍♂️* You are a superhero!

Instructions to guide you through the process:


## First step?

- **Create an issue** to explain and discuss the details, not compulsory. see how [here]()
- **Fork the repo**
- **All templates are found in ```src/``` folder**
- **Clone the forked repo** and set it up (check out the [What to contribute section](#What-can-I-contribute?) to know what you can contribute)
- **Run `npm install`**


## What can I contribute?
- [New starters (in any framework )in the programming language supported by the platform](#new-starters-in-any-framework)
- [New framework with a new starter](#New-framework-with-a-new-starter)
- [Updates on the existing starters](#Updates-on-the-starters-available)
- [creating a copy of an existing starter but with a different code or folder structure](#Another-starter-with-a-different-code-or-folder-structure-from-the-one-that-exist)
- [Create a starter for a tutorial](#create-a-starter-for-a-tutorial)
- [Update Quicksi online documentation](#Update-Quicksi-online-documentation)
- [Report or fix a bug on a Quicksi project](#Report-or-fix-a-bug-on-a-Quicksi-project)



## New starters in any framework
> If the framework or library of your new starter already exist in templates:

- In the required template folder, and in the respective Programming language folder, create a new folder inside the framework folder you want to create:

- Test locally


```bash

# to build transpile the typescript
# run

yarn build


# link the command to your local system
npm link


# Then create a new window and test by running the command
quicksi

# or
npx quicksi
```

- Next, checkout `index.ts` in src, and update the condition accordingly

- Works, you can see and test your template? Great!

- Next step, update the website documentation in order to make this visible on quicksi web docs. See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)

- See [Last Step](#Last-step)



## New framework with a new starter
> This will take a little bit of configuration, but we'll make it faster for you:

- Create a new folder for the new framework in the respective Programming language folder and add in the very first starter for that framework.

- Next, add an extra condition, in src/index.ts file

- Create a variable and point it to the path of the new framework you created:
```bash
e.g

const REACTJS = fs.readdirSync(path.join(__dirname, 'templates/<the programming language you created it on>/<your new framework>'));
```

- The last, kindly add a new condition for your new framework, read the comments to know where to add them:

- 
for example:

```bash
  {
    name: <add the acronym for the name of the programming language here>,
    type: 'list',
    message: 'choose the project starter you want to generate for <add the new framework name you created>?',
    choices: <pass in the variable you created and connected the path of your project to>,
    when: (answer: { javaScriptFrameworkLibrary: string; }) => {
      return answer.javaScriptFrameworkLibrary ===  <add the new framework name you created>';
    }
  },
```

- That's all, now test this locally

run 

```bash

# to build transpile the typescript
yarn build


# link the command to your local system
npm link


# Then create a new window and test by running the command
quicksi

# or
npx quicksi
```

Works, you can see and test your template?

- If yes, then next step, update the website documentation in order to make your new framework visible on quicksi web docs. See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)

See [Last Step](#Last-step)


## Updates on the starters available
You want to make an update either to some dependencies, probably deprecated dependencies, a new way of setting up a tool, fix some some error, or update their README.md file. Any updates you want to make on any starter that'll benefit others is welcome.

- go right into the folder of the starter you want to update and make your updates
- Test locally



```bash
# to build transpile the typescript
# run 

yarn build


# link the command to your local system
npm link


# Then create a new window and test by running the command
quicksi

# or
npx quicksi
```

Works, you can see and test your template?

- Last and next step, does your update or fix require you updating the web-documentation? If so update the website documentation in order to make your new framework visible on quicksi web docs. See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)

See [Last Step](#Last-step)


## Copy of an existing starter but with a different code or folder structure
You have another code style or folder structure and you want to add but there already exist a starter with the same framework but different code-structure? No worries, you can go ahead and add.

- create your new starter folder, leave it to be the same name as the previous starter if they using exactly the same tools. But note add a unique identity in front of it. Use `1x` count up. E.g; `react-js-2x`, this is if `react-js-1x` already exist.
- Now test your template locally


```bash

# to build transpile the typescript
# run 

yarn build


# link the command to your local system
npm link


# Then create a new window and test by running the command
quicksi

# or
npx quicksi
```


- Works, you can see and test your template and use it? Great!

- Next step, update the website documentation in order to make this visible on quicksi web docs. See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)

- See [Last Step](#Last-step)


## create a starter for a tutorial, or tech conference.
Quicksi can enable your learners get up and running with your code starter, for video tutorial, written tutorial, or tech conference, or any workshop where you want learners to use a starter. Here's is what you can do:

- In `templates/` file you'll find `tutorials`
- Create a folder for your starter, name your folder using a unique number, 3 in length.
You can create a number that does not exist among the templates.

> Example: `126`

**Number must be unique among the numbers on the templates**

Identifying, with numbers helps students to easily locate your starter and generate it. 

- Next add your starter in the folder. Create a README.md and add the description of your project.

- Next step, update the website documentation in order to make this visible on the tutorial section of the quicksi web docs. There is a different approach to take on here. See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)

- See [Last Step](#Last-step)


## Update Quicksi online documentation
You can update the documentation of quicksi, found something that's not clear to you or others and want to simplify it, go ahead.

- See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)
- Update the documentation and raise a PR
- See this guide before you raise a PR [Guide](#Guidelines)


## Report or fix a bug on a Quicksi project
Found a bug and want to fix it, thank you in advance:

- after fixing the bug
- Update the quicksi web documentation if it's a breaking change.
See how [here](https://github.com/AnayoOleru/quicksi/blob/master/documents/README.md)

- Check the [guidelines](#Guidelines) and raise a PR


## Last step?

- **Implement** the necessary changes or new starters or any contribution you want to make
- **Send a pull request**
- **You can can also checkout the [Guidelines](#Guidelines) below to see some other instructions**


## Guidelines


### Template starter naming

- For new starter folder name shouldn't be higher than 30 characters
- Append the programming language acronym, e.g, `js` for javascript.
- All should be in lower-case letters
- You can use `&` symbol, to break down the length of the naming.
- This applies to starter folder


### Git commit messages

- Limit the subject line to 72 characters
- Capitalize the first letter of the subject line
- Use the present tense ("Add feature" instead of "Added feature")
- Separate the subject from the body with a blank line
- Reference issues and pull requests in the body

### Coding style guide

Use ESLint to ensure a consistent code style, based on [Airbnb's JS style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).
You can use some other ESLint plugins, such as the [Prettier](https://github.com/prettier/eslint-plugin-prettier).

Please make sure that the code you are pushing conforms to the style guides mentioned above.

## About-starters
- Starters are not a full functionality codebase, shouldn't be. They should be what any developer can easily start writing the frontend design or start developing an API or any other thing easily.
- Take care of the file size of starters

## Merging period
New contributions are checked and merged in every weekend. If you have a video tutorial or tech conference and cannot wait for the weekend before merge, kindly raise a PR and reach out to me on: 
-  [twitter](https://twitter.com/AnayoOleru) 
-  [instagram](https://www.instagram.com/anayo.oleru/)
-  [facebook](https://web.facebook.com/anayooleru)
-  [linkedin](https://www.linkedin.com/in/anayooleru/)
-  [email](anayo_oleru@outlook.com)

I'll review and merged.
