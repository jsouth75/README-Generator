// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

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
    }
];

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((userAnswers) => {
            console.log(userAnswers)

        writeToFile(userAnswers)
    })
};

// Initialize app
init();


// function to write README file
function writeToFile(userAnswers) {
    fs.writeFile("README.md", generateMarkdown({...userAnswers}), (err) => {
        if(err) {
            throw err;
        } console.log("file created")
    });
};

// GitHub link needed