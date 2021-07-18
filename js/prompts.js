const inquirer = require('inquirer');
const fs = require('fs');
const Template = require('../src/template');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateSite = new Template();

function Prompts() {}

global.teamArray = [];

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
                name: 'TMId',
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
            let teamManager = new Manager(response.TMname, response.TMId, response.TMemail, response.TMoffice);
            console.log(teamManager);
            teamArray.push(teamManager);
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
                let engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
                console.log(engineer)
                teamArray.push(engineer);
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
                    name: 'internSchool',
                    message: "Enter Intern's school: ",
                },
            ])
            .then((response) => {
                let intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                teamArray.push(intern);
                console.log(intern)
                promptMenu();
            })
    }

    finish = () => {
        console.log(teamArray);
        writeToFile();
    }
}

function writeToFile() {
    fs.writeFile(`index.html`, generateSite.generate(), (err) =>
    err ? console.error(err) : console.log('Profile has been made.')
    );
}

module.exports = Prompts;