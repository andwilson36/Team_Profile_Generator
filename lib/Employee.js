class Employee {
    constructor(emName, id, email) {
        this.emName = emName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.emName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;