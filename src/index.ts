#!/usr/bin/env node

import * as  figlet from 'figlet';
import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as template from './utils/template';
import chalk from 'chalk';
import * as yargs from 'yargs';

const PROGRAMMING_LANGUAGE = fs.readdirSync(path.join(__dirname, 'templates'));

// File path connection for PROGRAMMING LANGUAGE
const JAVASCRIPTFRAMEWORK = fs.readdirSync(path.join(__dirname, 'templates/javascript'));
const TYPESCRIPTFRAMEWORK = fs.readdirSync(path.join(__dirname, 'templates/typescript'));

// File path connection for REACT
const REACTTS = fs.readdirSync(path.join(__dirname, 'templates/typescript/react-ts'));
const REACTJS = fs.readdirSync(path.join(__dirname, 'templates/javascript/react-js'));

// File path connection for NODE
const NODETS = fs.readdirSync(path.join(__dirname, 'templates/typescript/node-ts'));
const NODEJS = fs.readdirSync(path.join(__dirname, 'templates/javascript/node-js'));

// File path for  REACT_NATIVE

// const  REACT_NATIVE_JS =
// const  REACT_NATIVE_TS =

// const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));

// let realTemplatePath: any;

const QUESTIONS: Array<Object> = [
  {
    name: 'programmingLanguage',
    type: 'list',
    message: 'choose programming Language',
    choices: PROGRAMMING_LANGUAGE,
    when: () => !yargs.argv['programmingLanguage']
  },

// -------------- FRAMEWORKS OR LIBRARIES SECTION START----------------------\\
  /**
   * They're presented with 
   * Choose the framework they want to see in 
   * Typescript
   * or
   * JavaScript
   * 
   * frameworks:
   * 
   * TypeScript:
   * - react-ts
   * - node-ts
   * - react-native-ts
   * 
   * JavaScript
   * - react-js
   * - node-js
   * - react-native-ts
   * 
   * What to do?
   * if you add a new framework aside from the one above,
   * add a new condition below
   */
  {
    name: 'javaScriptFrameworkLibrary',
    type: 'list',
    message: 'choose the javascript project framework or library',
    choices: JAVASCRIPTFRAMEWORK,
    when: (answer1: { programmingLanguage: string }) => {
        return answer1.programmingLanguage === 'javascript';
      // return <string> answer1.programmingLanguage === 'javascript';
    }
  },
  {
    name: 'typescriptFrameworkLibrary',
    type: 'list',
    message: 'choose the typescript project framework or library',
    choices: TYPESCRIPTFRAMEWORK,
    when: (answer2: { programmingLanguage: string }) => {
      return answer2.programmingLanguage === 'typescript';
    }
  },

  // -------------- FRAMEWORKS OR LIBRARIES SECTION END----------------------\\




  // -------------- BOILER-PLATES FOR EACH SECTION START----------------------\\

  /**
   *  choose the starters you want
   *  return starters from the framework that was chosen
   *  starters from each file
   */

  //  Add starters that are typeScript here
  {
    name: 'tsStarters',
    type: 'list',
    message: 'choose the project starter you want to generate for TS?',
    choices: REACTTS,
    when: (answer6: { typescriptFrameworkLibrary: string }) => {
      return answer6.typescriptFrameworkLibrary === 'react-ts';
    }
  },

  {
    name: 'tsStarters',
    type: 'list',
    message: 'choose the project starter you want to generate for TS?',
    choices: NODETS,
    when: (answer6: { typescriptFrameworkLibrary: string }) => {
      return answer6.typescriptFrameworkLibrary === 'node-ts';
    }
  },


  // Add starters that are JavaScript here
  {
    name: 'jsStarters',
    type: 'list',
    message: 'choose the project starter you want to generate fo ReactJS?',
    choices: REACTJS,
    when: (answer4: { javaScriptFrameworkLibrary: string; }) => {
      return answer4.javaScriptFrameworkLibrary === 'react-js';
    }
  },

  {
    name: 'jsStarters',
    type: 'list',
    message: 'choose the project starter you want to generate fo NodeJS?',
    choices: NODEJS,
    when: (answer4: { javaScriptFrameworkLibrary: string; }) => {
      // console.log(answer4, 'answer4');
      return answer4.javaScriptFrameworkLibrary === 'node-js';
    }
  },

  // React-Native Starters

  // {
  //   name: 'jsStarters',
  //   type: 'list',
  //   message: 'choose the project starter you want to generate for React-Native?',
  //   choices: REACT_NATIVE,
  //   when: (answer4: { javaScriptFrameworkLibrary: string; }) => {
  //     // console.log(answer4, 'answer4');
  //     return answer4.javaScriptFrameworkLibrary === 'react-native';
  //   }
  // },


// -------------- BOILER-PLATES FOR EACH SECTION END---------------------- \\

  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    when: () => !yargs.argv['name'],
    validate: (input: string) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

const CURR_DIR = process.cwd();

export interface TemplateConfig {
  files?: string[]
  postMessage?: string
}

export interface CliOptions {
  projectName: string
  templateName: string
  templatePath: string
  tartgetPath: string
  config: TemplateConfig
}

inquirer.prompt(QUESTIONS)
  .then((answers: { [x: string]: any; }) => {

    console.log(answers, '1');
    answers = Object.assign({}, answers, yargs.argv);
    console.log(answers, '2');
    

    const projectLang = answers['programmingLanguage'];
    
    const projectFramework = answers['javaScriptFrameworkLibrary'] || answers['typescriptFrameworkLibrary'];

    /**
     * If you created a new Framework or library, pass it here,
     * as another condition
     */
    // Library or Framework START \\

    const projectStarter = answers['jsStarters'] || answers['tsStarters'];

    // Library or Framework END \\

    const projectChoice = projectLang+'/'+projectFramework+'/'+projectStarter;

    console.log(projectChoice, 'projectChoice');
    
    const projectName = answers['name'];
    const templatePath = path.join(__dirname, 'templates', projectLang, projectFramework, projectStarter);
    const tartgetPath = path.join(CURR_DIR, projectName);
    const templateConfig = getTemplateConfig(templatePath);

    const options: CliOptions = {
      projectName,
      templateName: projectChoice,
      templatePath,
      tartgetPath,
      config: templateConfig
    }
    if (!createProject(tartgetPath)) {
      return;
    }

    createDirectoryContents(templatePath, projectName, templateConfig);

    if (!postProcess(options)) {
      return;
    }

    showMessage(options);
  });

function showMessage(options: CliOptions) {
  console.log('');

  // var output= '';
  // output += ' \n';
  // output += ' ____  _____  ____  _____ \n';
  // output += '(_  _)(  _  )(  _ \\(  _  ) \n';
  // output += '  )(   )(_)(  )(_) ))(_)(  \n';
  // output += ' (__) (_____)(____/(_____) \n';

  // console.log(output);

  figlet('QUICKSI', (err: any, data: any) => {
    if (err) {
        console.log(chalk.red('Something went wrong...'));
        console.dir(err);
        return;
    }
    console.log(chalk.yellow(data))
});

  const output2 = '👱‍♀️ Quicksi has successfully generated a project starter for you';
  console.log('');
  console.log(chalk.green(output2));
  console.log(chalk.green(`cd ${options.projectName}`));
  console.log(chalk.yellow(`if there are two lock files, kindly delete one`));
  console.log(chalk.green(`Checkout the README file of the project, for further details on starting the app.`));

  console.log('');
  console.log(chalk.yellow(`👱‍♀️ Quicksi love developers, show her some love, give her a star 🌟 <https://bit.ly/2KhW4s5>`));
  console.log(chalk.yellow(`You can contribute too 🦸‍♂️, see how <https://bit.ly/3cligNY>`));

  const message = options.config.postMessage;

  if (message) {
    console.log('');
    console.log(chalk.yellow(message));
    console.log('');
  }

}

function getTemplateConfig(templatePath: string): TemplateConfig {
  const configPath = path.join(templatePath, '.template.json');

  if (!fs.existsSync(configPath)) return {};

  const templateConfigContent = fs.readFileSync(configPath);

  if (templateConfigContent) {
    return JSON.parse(templateConfigContent.toString());
  }

  return {};
}

function createProject(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`Folder ${projectPath} exists. Delete or use another name.`));
    return false;
  }

  fs.mkdirSync(projectPath);
  return true;
}

function postProcess(options: CliOptions) {
  if (isNode(options)) {
    return postProcessNode(options);
  }
  return true;
}

function isNode(options: CliOptions) {
  return fs.existsSync(path.join(options.templatePath, 'package.json'));
}

function postProcessNode(options: CliOptions) {
  shell.cd(options.tartgetPath);

  let cmd = '';

  if (shell.which('yarn')) {
    cmd = 'yarn';
  } else if (shell.which('npm')) {
    cmd = 'npm install && npm update';
  }

  if (cmd) {
    const result = shell.exec(cmd);

    if (result.code !== 0) {
      return false;
    }
  } else {
    console.log(chalk.red('No yarn or npm found. Cannot run installation.'));
  }

  return true;
}

const SKIP_FILES = ['node_modules', '.template.json'];

function createDirectoryContents(templatePath: string, projectName: string, config: TemplateConfig) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');

      contents = template.render(contents, { projectName });

      const writePath = path.join(CURR_DIR, projectName, file);
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, projectName, file));

      // recursive call
      createDirectoryContents(path.join(templatePath, file), path.join(projectName, file), config);
    }
  });
}
