// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(answers) {
  return `# ${answers.title}

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
}

module.exports = generateMarkdown;
