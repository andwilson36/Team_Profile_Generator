const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super(school);
        this.school = school;
        this.role = 'Intern';
    }
}

module.exports = Intern;