const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'TMname',
            message: "Enter Team Manager's name: ",
        },
        {
            type: 'input',
            name: 'TMemId',
            message: "Enter Team Manager's employee ID: ",
        },

        {
            type: 'input',
            name: 'TMemail',
            message: "Enter Team Manager's email address: ",
        },

        {
            type: 'input',
            name: 'TMoffice',
            message: "Enter Team Manager's office number: ",
        },
        {
          type: 'list',
          name: 'menu',
          message: 'Add an engineer, intern or finish building team.',
          choices: ['Engineer', 'Intern','Finish Team'],
        },
    ])