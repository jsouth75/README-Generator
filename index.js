// Packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./generateReadme');
const fs = require('fs');

// An array of questions for user input
const questions = [
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
        type: "list",
        name: "license",
        message: "Any license?",
        choices: ['MIT', 'Apache', 'GNU', 'ISC'],
        filter(val) {
            return val.toLowerCase();
        }
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
    }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((userAnswers) => {
            console.log(userAnswers)

            const template = `# ${userAnswers.title}
            
## Content

my name is ${userAnswers.name} and my GitHub username is ${userAnswers.GitHub} ${userAnswers.title} ${userAnswers.title} ${userAnswers.title}`

            fs.writeFile("README.md", template, (err) => {
                if(err) throw err;
                console.log("created a file")
            })
        })
}

// Function call to initialize app
init();