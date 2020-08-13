const fs = require(`fs`)
const inquirer = require(`inquirer`)

const question = [
    { 
      type: "input",
      name: "badge",
      message: "What would you like your badge to be?",
    },
    {
      type: "input",
      name: "projectName",
      message: "What do you want the Project Name to be?",
    },
    {
      type: "input",
      name: "Description",
      message: "What is the description of the project?",
    },
    {
      type: "input",
      name: "Installation",
      message: "How would you like to Install this project?",
    },
    {
      type: "input",
      name: "Usage",
      message: "Who will be using this project?",
    },
    {
      type: "checkbox",
      name: "License",
      choices: [
        "Creative Commons license family",
        "Mozilla Public License 2.0	",
        "SIL Open Font License 1.1	",
        "zLib License	",
      ]
    },
    {
      type: "input",
      name: "Contributing",
      message: "What are the rules for contributing to this project?",
    },
    {
     type: "input",
     name: "authors",
     message: "Who are the authors for this project?", 
    },
    {
      type: "input",
      name: "tests",
      message: "what test would you like to run on this page"
    },
    {
      type: "input",
      name: "profilepicture",
      message: "Enter a URL for a picture",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email here",
    },
    {
      type: "input",
      name: "tableofcontents",
      message: "Enter a table of comments seperated by commas",
    },
]
console.clear();

inquirer
  .prompt(question).then(response => {

  fs.appendFileSync("README.md", ("#" + response.projectName) + '\n', (err) => {
    if (err) {
      return console.log(err);
    }
      console.log(`Success!`);
  });
  
  fs.appendFileSync("README.md", (`\n` + response.badge) + `\n`, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync("README.md", (`##Description` + `\n` + response.Description) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## Table of Contents` + `\n` + `- ` + response.tableofcontents.split(`, `).join(`\n` + `- `)) + `\n`,  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## Installation Instructions` + `\n` + response.Installation) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## Usage` + `\n` + response.Usage) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });
  
  fs.appendFileSync(`README.md`, (`## License` + `\n` + response.License) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## Authors` + `\n` + response.authors) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## How to Contribute` + `\n` + response.Contributing) +`\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## How to Run Tests` + `\n` + response.tests) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`## Contact Info` + `\n` + `![alt text](` + response.profilepicture + `)`) + `\n`, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });

  fs.appendFileSync(`README.md`, (`\n` +response.email) + `\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });
});  
  
      
 


    






// const questions = ["What would you like the title to be for Project?", "What is the description for this project?", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Github Profile Pic", "Github Email"];

//  writ =>eToFile(fileName, data) {
// }

//  init =>() {

// }

// init();
