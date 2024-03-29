// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const { generateReadme } = require('./generateMarkdown');

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
        message: "What installation method is used?"
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how to use/run this project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who all contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What testing method is used?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Any license?",
        choices: [
            'MIT', 'Apache_2', 'GNU_GPLv3', 'ISC'
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
]

function runQuestions() {
    return inquirer.prompt(questions)
       .then((answers) => {
            const generate = generateMarkdown.generateReadme(answers)
            fs.writeFile('README.md', generate, function(err) {
                if(err) {
                    console.log('File was not created', err)
                } else {
                    console.log('Successfully created new README file')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
        
    }
    
    runQuestions()

