// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== ""){
    return `[![License](https://img.shields.io/badge/${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [license](#license)  
- [Questions](#questions)
- [Tests](#tests)
  ## Description
  
  ${data.description}
  
  
  ## Installation
  
  ${data.Installation}
  
  ## Usage
  
  ${data.Usage}
  

  
  ## Credits
  
  ${data.Credits}
  
  ## License
  
  This application is covered under the ${renderLicenseBadge(data.license)} license.


  ## Features
  
  ${data.Features}
  
  ## Tests
  ${data.Tests}
  
  ## Questions
  ### Contact
  For additional questions, please reach out to me at ${data.email} <br/>
  Check out my GitHub profile here: https://github.com/${data.username}
`;
}
module.exports = generateMarkdown;
