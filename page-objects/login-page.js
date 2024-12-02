class LoginPage {
  usernameInput = `input[name='email']`;

  passwordInput = `input[name='password']`;

    erroMessageIncorrectLogin(invalidmessage) {
    return `//div[@class='sc-fqkvVR eEldLM']/p[text()='${invalidmessage}']`;
  }

  unableToUpdatePwdError = ".MuiAlert-message";

  updatePasswordError(Errormessage) {
    return (`//p[contains(.,'${Errormessage}')]`);
  }

  signoutBtn = "//a[contains(.,'Sign out')]"

  heading="h1"

  usernameInputSalesforce = `input[type='email']`;

  passwordInputSalesforce = `input[type='password']`;

  loginButtonSalesforce = `input[type='submit']`;

  searchFieldSalesforce = `input[placeholder='Search...']`;

  userNameSalesforce = `a[title='ALORICA CONVERSION']`;

  getUserPassword() {
    return (`//div[contains(.,'Password')and contains (@data-target-selection-name,'sfdc:RecordField.Contact.Password__c')]//lightning-formatted-text`);
  }

}

module.exports = LoginPage;