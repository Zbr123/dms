class LoginPage {
  usernameInput = `input[name='email']`;   // Locator for username input field
  passwordInput = `input[name='password']`;   // Locator for password input field

  loginButton(buttonText) {
    return (`//button[contains(.,'${buttonText}')]`);
  }
}

module.exports = LoginPage;
