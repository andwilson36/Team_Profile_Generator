const Employee = require('./Employee');

class Manager extends Employee {
    constructor(emName, id, email, officeNumber) {
        super(emName, id, email);
        this.emName = emName;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;