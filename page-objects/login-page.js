class LoginPage {
  usernameInput = `input[name='email']`;

  passwordInput = `input[name='password']`;

  
  applicationVersion(versionNumber) {
    return `//div[contains(@class,'version') and contains(., '${versionNumber}')]`;
  }

  erroMessageIncorrectLogin(invalidmessage) {
    return `//div[@class='sc-fqkvVR eEldLM']/p[text()='${invalidmessage}']`;
  }

  unableToUpdatePwdError = ".MuiAlert-message";

  updatePasswordError(Errormessage) {
    return (`//p[contains(.,'${Errormessage}')]`);
  }

  signoutBtn = "//a[contains(.,'Sign out')]"

  heading="h1"

}

module.exports = LoginPage;