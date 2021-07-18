const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('name', () => {
        it('should return the name of the employee', () => {
            const name = 'Steve';
            const id = '2';
            const email = 'email';

            const result = new Employee(name, id, email);

            expect(result.name).toEqual(name);
        });
    });
    describe('id', () => {
        it('should return the id of the employee', () => {
            const name = 'Steve';
            const id = '2';
            const email = 'email';

            const result = new Employee(name, id, email);

            expect(result.id).toEqual(id);
        });
    });
    describe('email', () => {
        it('should return the email of the employee', () => {
            const name = 'Steve';
            const id = '2';
            const email = 'email';

            const result = new Employee(name, id, email);

            expect(result.email).toEqual(email);
        });
    });
});