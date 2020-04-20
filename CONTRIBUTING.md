# Contributing
First off, thank you so much for taking the time to contribute. All contributions are more than welcome!

Quicksi calls her contributors *Superheroes🦸‍♂️* You are a superhero!

Instructions to guide you through the process:

**Starters** Are the templates or boiler plates, users get to start their project with.

## First step?

- **Create an issue** to explain and discuss the details, not compulsory.
- **Fork the repo**
- **All templates are found in ```src/``` folder**
- **Clone the forked repo** and set it up (check out the [What to contribute section](#What-can-I-contribute?) to know what you can contribute)


## What can I contribute?
- [New starters in any framework in the programming language supported by the platform](#new-starters-in-any-framework)

- [New framework with a new starter](#New-framework-with-a-new-starter)

- [Updates on the starters available](#Updates-on-the-starters-available)

- [Another starter with a different code or folder structure from the one that exist](#Another-starter-with-a-different-code-or-folder-structure-from-the-one-that-exist)

- [A new but more professional starter in a specific framework for professionals](#)
- [Starters you want to use in a video tutorial, written tutorial, or tech conference, and want your learners to easily get it up and running quickly]()
- [Update documentation or README.md file of a particular project](#)
- [Update Quicksi online documentation]()
- [Report or fix a bug on a quicksi project]()



## New-starters-in-any-framework
> If the framework of your new starter already exist in the sidebar:

- Create a new folder in the respective Programming language folder, add your starter in the required template.

- Test locally

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


- Works, you can see and test your template? Great!

- Next step, update the website documentation in order to make this visible on quicksi web docs. See how [here]()

- See [Last Step](#Last-step)



## New framework with a new starter
> This will take a little bit of configuration, but we'll make it faster for you:

- Create a new folder for the new framework in the respective Programming language folder and add your new and very first starter for that framework.

- Next, add an extra condition, in src/index.ts file

- Between `line 14 - line 24`, create a variable and point it to the path of the new framework you created:
```bash
e.g

const REACTJS = fs.readdirSync(path.join(__dirname, 'templates/<the programming language you created it on>/<your new framework>'));
```

- The last, between `line 101 - line 143`, kindly add a new condition for your new framework, read the comments to know where to add them:

- 

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

- Next step, update the website documentation in order to make your new framework visible on quicksi web docs. See how [here]()

See [Last Step](#Last-step)

for-example- an old or deprecated tool


## Updates on the starters available
You want to make an update either to some dependencies, probably deprecated dependencies, a new way of setting up a tool, or fix some some error. Any updates you want to make on any starter that'll benefit others is welcome.

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

- Last and Next step, do this require you updating the web-documentation? If so update the website documentation in order to make your new framework visible on quicksi web docs. See how [here]()

See [Last Step](#Last-step)


## Another starter with a different code or folder structure from the one that exist
You have another code style or folder structure that has helped you really well and you want to add but there already exist a starter already but different code-structure? No worries, you can go ahead and add.

- create you new starter folder, leave it to be the same name as the previous starter if they using exactly the same tools. But note add a unique identity in front of it. Use `1x` count up. E.g; `react-js-2x`, this is if `react-js-1x` already exist.
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

- Next step, update the website documentation in order to make this visible on quicksi web docs. See how [here]()

- See [Last Step](#Last-step)


## Last step?

Great, to make you really know you contribute to quicksi:

- **Implement** the necessary changes or new starters or any contribution you want to make
- **Send a pull request**
- **You can can also checkout the [Guidelines](#Guidelines) below to see some other instructions**


## Guidelines


### Template starter naming

- For new starter folder name shouldn't be higher than 30 characters
- Append the programming language acronym, e.g, `js` for javascript.
- All should be in lower-case letters
- You can use `&` symbol, to break down the length of the file name.


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


## Merging period
New contributions are checked and merged in every weekend. If you have a video tutorial or tech conference and cannot wait for the weekend before merge, kindly raise a PR and reach out to me on: 
-  [twitter](https://twitter.com/AnayoOleru) 
-  [instagram](https://www.instagram.com/anayo.oleru/)
-  [facebook](https://web.facebook.com/anayooleru)
-  [linkedin](https://www.linkedin.com/in/anayooleru/)
-  [email](anayo_oleru@outlook.com)

I'll review and merged.
