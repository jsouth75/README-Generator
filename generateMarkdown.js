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


generateMarkdown = ({ name, title, description, installation, usage, contribution, test, license, github, email}) =>
  `    
  # ${data.title}
      
  ## Table of Contents
      ### Description
      ### Installation
      ### Usage
      ### License
      ### Tests
      ### Contributing
      ### Contact
  
      
      <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">${data.title}</h1>
        <p class="lead">created by ${name}</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">LinkedIn: ${installation}</li>
          <li class="list-group-item">LinkedIn: ${usage}</li>
          <li class="list-group-item">LinkedIn: ${license}</li>
          <li class="list-group-item">LinkedIn: ${test}</li>
          <li class="list-group-item">LinkedIn: ${contribution}</li>
          <li class="list-group-item">Contact: <br/>
                  GitHub username is ${github}, <br/>
                  Email : ${email}
          </li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
