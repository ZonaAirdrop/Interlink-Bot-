const readline = require('readline');
const authController = require('./controllers/authController');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function questionAsync(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  try {
    const loginId = await questionAsync('Enter your login ID (number): ');
    const email = await questionAsync('Enter your email: ');

    const otpCallback = async () => {
      return await questionAsync('Enter OTP: ');
    };

    await authController.loginFlow(loginId.trim(), email.trim(), otpCallback);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
