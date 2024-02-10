// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
const generateREADME = require('./generateREADME');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'project description',
        message: 'Provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'What are the installation instructions for this project?',
    },
    {
        type: 'input',
        name: 'usage infomation',
        message: 'Provide the usage information for this project.',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the contribution guidelines for this project?',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Provide the test instructions for this project.',
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


function writeReadmeFile(content) {
    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file created successfully!');
    });
}

// TODO: Create a function to initialize app
// function init() {}


function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateREADME(answers);
      writeReadmeFile(readmeContent);
    });
  }

// Function call to initialize app
init();
