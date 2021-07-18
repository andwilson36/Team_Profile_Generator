const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        super(github);
        this.github = github;
        this.role = 'Engineer';
    }
}

module.exports = Engineer;