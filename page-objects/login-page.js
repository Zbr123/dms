class LoginPage {
  usernameInput = `input[name='email']`;   // Locator for username input field
  passwordInput = `input[name='password']`;   // Locator for password input field

  //  profileTab_SSNDob_InputField() {
  //   return (`//input[@placeholder='Enter last 4 digits of SSN']`);
  // }


  SSn = `input[placeholder='Enter last 4 digits of SSN']`;
  dATE = `input[placeholder='mm/dd/yyyy']`;

   inputFieldForUpdatePwd(placeholderText) {
    return (`//input[@placeholder='${placeholderText}']`);
  }

   loginButton(buttonText) {
    return (`//button[contains(.,'${buttonText}')]`);
  }

// Locator function for dynamic link text
   forgotpwd(linkText) {
    return `//a[text()='${linkText}']`;
  }

  applicationVersion(versionNumber) {
    return `//div[contains(@class,'version') and contains(., '${versionNumber}')]`;
  }

// Locator For Document

  documentHeading(headingText) {
    return `//div[contains(@class, 'text-block')]//h3[contains(., '${headingText}')]`;
  }

  viewDocumentbtn(viewDoc) {
    return `//button[contains(@class, 'btn-link') and contains(text(), '${viewDoc}')]`;
  }

  identificationDocumentExample(Viewheading) {
    return `//h1[@id='heading1_docEx' and text()='${Viewheading}']`;
  }

  howToUploadDocumentText(Steps) {
    return `(//p[text()='${Steps}'])[1]`;
  }
// Locator For invalid login

  erroMessageIncorrectLogin(invalidmessage) {
    return `//div[@class='sc-fqkvVR eEldLM']/p[text()='${invalidmessage}']`;
  }


  additionalInformationBanner = `//div[contains(@class,'validation-badge')and contains (.,'Additional information needed')]`;
  
  inputBlankEmail = "div.sc-fqkvVR.eEldLM > p:nth-child(2)";
  inputBlankpwd = "div.sc-fqkvVR.eEldLM > p:nth-child(3)";

// Assertion for forgot Password

  Accountpwd = "h1";

// Assertion for Update Password

  changepwdtext = "h1"

//update password message errors locators

  unableToUpdatePwdError = "#root > div > div > div > div.mui-snackbar > div > div";

  updatePasswordError(Errormessage) {
    return (`//p[contains(.,'${Errormessage}')]`);
  }

  // Assertion for sign out
  signoutBtn = "//a[contains(.,'Sign out')]"
  loginPageSigninHeading = "h1"
  // attemptLeftOnProfileTab = //strong[contains(.,'2')]

  attemptLeftOnProfileTab(attmptValue) {
    return (`//strong[contains(.,'${attmptValue}')]`);
  }
}

module.exports = LoginPage;
