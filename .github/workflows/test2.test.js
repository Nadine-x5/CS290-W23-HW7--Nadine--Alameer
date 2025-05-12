const { validatePassword } = require('../src/passwordValidator');

describe("Password Validator", () => {
  test("Rejects short passwords", () => {
    expect(validatePassword("abc")).toBe(false);
  });
  
  test("Accepts valid passwords", () => {
    expect(validatePassword("GoodP@ssw0rd")).toBe(true);
  });
});