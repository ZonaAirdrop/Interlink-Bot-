function validateLoginId(loginId) {
  if (!/^\d{4,12}$/.test(loginId)) {
    throw new Error('Login ID must be a number with 4 to 12 digits');
  }
}

function validateEmail(email) {
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }
}

function validateOtp(otp) {
  if (!otp || otp.length === 0) {
    throw new Error('OTP is required');
  }
}

module.exports = {
  validateLoginId,
  validateEmail,
  validateOtp,
};
