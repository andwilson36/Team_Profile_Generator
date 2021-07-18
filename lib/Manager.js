const Employee = require('./Employee');

class Manager extends Employee {
    constructor(emName, id, email, officeNumber) {
        super(emName, id, email, officeNumber);
        this.emName = emName;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

module.exports = Manager;