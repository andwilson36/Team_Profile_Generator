const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('github', () => {
        it('should return the school info of the intern', () => {
            const school = 'UTA';

            const result = new Intern(school);

            expect(result.school).toEqual(school);
        });
    });
    describe('role',  () => {
        it('should return the role of the intern', () => {
            const role = 'Intern';

            const result = new Intern();

            expect(result.role).toEqual(role);
        });
    });
});