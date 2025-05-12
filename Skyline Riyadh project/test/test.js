// tests/functional/password.test.js
const { validatePassword } = require('../../src/passwordValidator');

test('Password must be at least 8 characters', () => {
  expect(validatePassword('short')).toBe(false); // too short
  expect(validatePassword('longenough')).toBe(true); // long enough
});

test('Password needs special characters', () => {
  expect(validatePassword('nospchars1')).toBe(false);
  expect(validatePassword('has@char1')).toBe(true);
});