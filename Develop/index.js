// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateREADME');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What are the installation instructions for this project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Provide the usage information for this project.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What are the contribution guidelines for this project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Provide the test instructions for this project.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
