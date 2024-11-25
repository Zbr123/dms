class LoginPage {
  usernameInput = `input[name='email']`;

  passwordInput = `input[name='password']`;

  SSN = `input[placeholder='Enter last 4 digits of SSN']`;

  DATE = `input[placeholder='mm/dd/yyyy']`;

  inputFieldForUpdatePwd(placeholderText) {
    return (`//input[@placeholder='${placeholderText}']`);
  }

  Button(buttonText) {
    return (`//button[contains(.,'${buttonText}')]`);
  }

  forgotPwd(linkText) {
    return `//a[text()='${linkText}']`;
  }

  applicationVersion(versionNumber) {
    return `//div[contains(@class,'version') and contains(., '${versionNumber}')]`;
  }

  documentHeading(headingText) {
    return `//div[contains(@class, 'text-block')]//h3[contains(., '${headingText}')]`;
  }

  viewDocumentBtn(viewDoc) {
    return `//button[contains(@class, 'btn-link') and contains(text(), '${viewDoc}')]`;
  }

  identificationDocumentExample(Viewheading) {
    return `//h1[@id='heading1_docEx' and text()='${Viewheading}']`;
  }

  howToUploadDocumentText(Steps) {
    return `(//p[text()='${Steps}'])[1]`;
  }

  erroMessageIncorrectLogin(invalidmessage) {
    return `//div[@class='sc-fqkvVR eEldLM']/p[text()='${invalidmessage}']`;
  }

  additionalInformationBanner = `//div[contains(@class,'validation-badge')and contains (.,'Additional information needed')]`;

  AccountPwd = "h1";

  changePwdText = "h1"

  unableToUpdatePwdError = "#root > div > div > div > div.mui-snackbar > div > div";

  updatePasswordError(Errormessage) {
    return (`//p[contains(.,'${Errormessage}')]`);
  }

  signoutBtn = "//a[contains(.,'Sign out')]"
  
  loginPageSigninHeading = "h1"

  attemptLeftOnProfileTab(attmptValue) {
    return (`//strong[contains(.,'${attmptValue}')]`);
  }
}

module.exports = LoginPage;