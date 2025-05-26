const servis = require('../services/servis');

async function loginFlow(loginId, email, otpCallback) {
  try {
    console.log('Sending OTP...');
    await servis.sendOtp(loginId, email);
    console.log('OTP sent! Please check your email.');

    // otpCallback: fungsi untuk mengambil input OTP dari user (misal CLI input)
    const otp = await otpCallback();

    console.log('Verifying OTP...');
    const result = await servis.verifyOtp(loginId, otp);
    console.log('Login successful:', result);
    return result;
  } catch (err) {
    console.error('Login flow error:', err.message);
    throw err;
  }
}

module.exports = {
  loginFlow,
};
