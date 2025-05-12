const { validatePassword } = require('./passwordUtils');

test('Valid password passes validation', () => {
  expect(validatePassword('Pass@1234')).toBe(true);
});

test('Password too short fails', () => {
  expect(validatePassword('P@1')).toBe(false);
});

test('Password missing special character fails', () => {
  expect(validatePassword('Pass1234')).toBe(false);
});

test('Password with less than 2 numbers fails', () => {
  expect(validatePassword('Test@1abc')).toBe(false);
});
