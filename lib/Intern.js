const Employee = require('./Employee');

class Intern extends Employee {
    constructor(emName, id, email, school) {
        super(emName, id, email);
        this.emName = emName;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;