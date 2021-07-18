const inquirer = require('inquirer');
const fs = require('fs');

function Prompts() {}

Prompts.prototype.cmdLinePrompts = function() {
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
        ])
        .then((response) => {
            promptMenu();
        });

    promptMenu = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Add an engineer, intern or finish building team.',
                    choices: ['Engineer', 'Intern', 'Finish Team'],
                }
            ])
            .then((response) => {
                response.menu == 'Engineer' ? buildEngineer()
                    : response.menu == 'Intern' ? buildIntern()
                        : finish();
            })
    }

    buildEngineer = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "Enter Engineer's name: ",
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "Enter Engineer's employee ID: ",
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "Enter Engineer's email address: ",
                },
                {
                    type: 'input',
                    name: 'engineerGitHub',
                    message: "Enter Engineer's GitHub username: ",
                },
            ])
            .then((response) => {
                promptMenu();
            })
    }

    buildIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "Enter Intern's name: ",
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "Enter Intern's employee ID: ",
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "Enter Intern's email address: ",
                },
                {
                    type: 'input',
                    name: 'internGitHub',
                    message: "Enter Intern's GitHub username: ",
                },
            ])
            .then((response) => {
                promptMenu();
            })
    }

    finish = () => {
        console.log('Profile has been made.')
    }
}

module.exports = Prompts;