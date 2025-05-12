function validatePassword(password) {
    let isValid = true;

    if (password.length < 8) isValid = false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) isValid = false;
    if ((password.match(/\d/g) || []).length < 2) isValid = false;

    return isValid;
}

module.exports = { validatePassword };
// Example usage
// const { validatePassword } = require('./validation');