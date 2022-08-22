// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

// An array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Description of project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Do you have any installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the project usage?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Did you use any license?",
        choices: [
            'MIT', 'Apache', 'GNU', 'ISC', 'none',
        ],
        },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
])
.then((answers) => {
    const htmlPageContent = generateMarkdown(answers);

    fs.writeFile('generateMarkdown', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created file!')
    );
  });

 


// const init = () => {
//     promptUser()
//       .then((answers) => fs.writeFileSync('generateMarkdown', [], (answers)))
//       .then(() => console.log('Successfully created'))
//       .catch((err) => console.error(err));
//   };
  
//   init();
