const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('github', () => {
        it('should return the github info of the engineer', () => {
            const github = 'information';

            const result = new Engineer('name', '1', 'url', github);

            expect(result.getGithub()).toEqual(github);
        });
    });
    describe('role',  () => {
        it('should return the role of the engineer', () => {
            const role = 'Engineer';

            const result = new Engineer();

            expect(result.role).toEqual(role);
        });
    });
});