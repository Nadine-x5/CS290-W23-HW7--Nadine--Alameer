const { validatePassword } = require('./passwordUtils');

test('Valid password passes validation', () => {
    expect(validatePassword('Test@1234')).toBe(true);
});

test('Too short password fails', () => {
    expect(validatePassword('T@1')).toBe(false);
});

test('Missing special character fails', () => {
    expect(validatePassword('Test1234')).toBe(false);
});

test('Only one number fails', () => {
    expect(validatePassword('Test@1abc')).toBe(false);
});
test('No numbers fails', () => {
    expect(validatePassword('Test@abcd')).toBe(false);
});