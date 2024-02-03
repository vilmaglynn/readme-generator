const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const licenses = [
  "AFL-3.0",
  "Apache-2.0",
  "Artistic-2.0",
  "BSL-1.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "BSD-3-Clause-Clear",
  "BSD-4-Clause",
  "0BSD",
  "CC",
  "CC0-1.0",
  "CC-BY-4.0",
  "CC-BY-SA-4.0",
  "WTFPL",
  "ECL-2.0",
  "EPL-1.0",
  "EPL-2.0",
  "EUPL-1.1",
  "AGPL-3.0",
  "GPL",
  "GPL-2.0",
  "GPL-3.0",
  "LGPL",
  "LGPL-2.1",
  "LGPL-3.0",
  "ISC",
  "LPPL-1.3c",
  "MS-PL",
  "MIT",
  "MPL-2.0",
  "OSL-3.0",
  "PostgreSQL",
  "OFL-1.1",
  "NCSA",
  "Unlicense",
  "Zlib",
];

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Title - <Your-Project-Title>",
    },
    {
      type: "input",
      name: "description",
      message:
        "Description - Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n- What was your motivation?\n- Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.')\n- What problem does it solve?\n- What did you learn?",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Installation - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Usage -Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\n```md \n![alt text](assets/images/screenshot.png)```",
    },

    {
      type: "input",
      name: "screenshot",
      message: "Screenshot - ![alt text](assets/images/",
    },
    {
      type: "list",
      name: "license",
      message:
        "License - Select a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
      choices: licenses,
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributions - Enter contributions",
    },
    {
      type: "input",
      name: "test",
      message:
        "Tests - This section provides information on how to test the project. It may include:Instructions for setting up a development environment. Commands for running tests.Details on specific test cases or scenarios to check. Information on any testing frameworks used.",
    },
    {
      type: "input",
      name: "github",
      message: "Contact - Enter your GitHub Username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Contact - Enter your LinkedIn URL.",
    },
    {
      type: "input",
      name: "email",
      message: "Contact - Enter your email address.",
    },
  ]);

const generateREADME = (answers) =>
  `# ${answers.title}

[![License:${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}
![alt text](./assets/images/${answers.screenshot})

## License

${answers.license}
For details of this license please view link below
https://opensource.org/licenses/${answers.license};

## Contributing

${answers.contributing}

## Tests

${answers.test}

## Questions

Github: ${answers.github}\n
LinkedIn: ${answers.linkedin}\n
Email: ${answers.email}\n`;

promptUser()
  .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
  .then(() => console.log("Successfully wrote to READEME.md"))
  .catch((err) => console.error(err));
