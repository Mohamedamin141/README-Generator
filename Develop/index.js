// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
     message:"Your-Project-Title",
     name:"title"
  },

  {
    type:"input",
     message:"enter a description,",
     name:"description"
  },


  {
    type:"input",
     message:"What are the steps required to install your project?",
     name:"Installation"
  },

  {
    type:"input",
     message:"Provide instructions and examples for use?",
     name:"Usage"
  },

  {
    type:"input",
     message:"List your collaborators, if any,",
     name:"Credits"
  },
  {
    type:"list",
     message:"which License?",
     name:"license",
     choices:["MIT-License", "Boost-License", "Unlicense-license", "Apache-License", "GNU-GPLv3", "GNU-LGPLv3", "GNU-AGPLv3"]
  },
  {
    type:"input",
     message:"If your project has a lot of features, list them here.",
     name:"Features"
  },
  {
    type:"input",
     message:"write tests instructions for your application",
     name:"Tests"
  },
  {
    type:"input",
     message:"enter your GitHub username",
     name:"username"
  },
  {
    type:"input",
     message:"enter your Email",
     name:"email"
  },
 ];

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => err?
    console.log(err): console.log("Success!")
   )

}

function init() {}
inquirer.prompt(questions)
.then(function(data){
  writeToFile("../README.md",generateMarkdown(data));
  
})
// Function call to initialize app
init();





