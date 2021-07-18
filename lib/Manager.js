const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(officeNumber);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

module.exports = Manager;