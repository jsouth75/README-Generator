// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// function generateMarkdown (license) {}

class generateMarkdown {

    static renderLicenseBadge(license){
        const badges = {
            MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            Apache_2: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            GNU_GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
            Apache_2: '[Apace_2](https://choosealicense.com/licenses/apache-2.0/)',
            GNU_GPLv3: '[GNU_GPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
            ISC: '[ISC](https://choosealicense.com/licenses/isc/)'
        }

        return licenseLinks[license]
    }

    static renderLicenseSection(license){
        if(license){
            return `${this.renderLicenseLink(license)} license`
        } else {
            return ``
        }
    }

    static generateReadme(answers) {
        return `            
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Content
- [Project description](#description)
- [Installation](#installation)
- [Usage Information](#usage)
- [Test Instructions](#Test)
- [License](#license)
- [Contribution](#contribution)
- [Contact Information](#contact)

## Project description
${answers.description}

## Installation
${answers.installation}

## Usage Information
${answers.usage}

## Test
${answers.test}

## License
${this.renderLicenseSection(answers.license)}

## Contribution
${answers.contribution}

## Contact
${answers.name} <br/>
GitHub username: ${answers.GitHub} <br/>
Email: ${answers.email}
        
`
}
}
    
module.exports = generateMarkdown;
        