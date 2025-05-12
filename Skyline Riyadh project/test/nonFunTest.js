// tests/non-functional/performance.test.js
const { validatePassword } = require('../../src/passwordValidator');

test('Validation should be fast', () => {
  const start = Date.now();
  validatePassword('V3ryL0ngP@ssw0rd!!');
  const timeTaken = Date.now() - start;
  expect(timeTaken).toBeLessThan(10); // should take less than 10ms
});