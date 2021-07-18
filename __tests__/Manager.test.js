const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('officeNumber', () => {
        it('should return the office number of the manager', () => {
            const offNum = '1';

            const result = new Manager(offNum);

            expect(result.officeNumber).toEqual(offNum);
        });
    });
    describe('getRole', () => {
        it('should return the role of the manager', () => {
            const role = 'Manager';

            const result = new Manager();

            expect(result.role).toEqual(role);
        });
    });
});