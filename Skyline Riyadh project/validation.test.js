const { validateUsername, validatePassword } = require('./validation');

test("Valid username", () => {
  expect(validateUsername("Ali12")).toBe(true);
});

test("Too short username", () => {
  expect(validateUsername("Ali")).toBe(false);
});

test("Valid password", () => {
  expect(validatePassword("pass12!@")).toBe(true);
});

test("Password missing special character", () => {
  expect(validatePassword("pass1234")).toBe(false);
});
