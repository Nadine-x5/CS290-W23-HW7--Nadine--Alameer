function validatePassword(password) {
  // Minimum 8 characters
  if (password.length < 8) return false;
  
  // At least 2 numbers
  if ((password.match(/\d/g) || []).length < 2) return false;
  
  // At least 1 special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
  
  return true;
}

module.exports = { validatePassword };