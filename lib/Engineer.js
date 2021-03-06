const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(emName, id, email, github) {
        super(emName, id, email);
        this.emName = emName;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;