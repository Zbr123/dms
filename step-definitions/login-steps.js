const { Given, When, Then, And } = require('@cucumber/cucumber');
const LoginPage = require('../page-objects/login-page'); // Import the locator class
const { expect } = require('@playwright/test');

let loginPage=new LoginPage;  // Declare loginPage without initializing it



Given('I navigate to {string}', async function (url) {
  await page.goto(url);
});

When('I enter username {string} and {string} password', async function (name,pass) {
  await page.fill(loginPage.usernameInput, name);  // Replace with valid username
  await page.fill(loginPage.passwordInput,pass);  // Replace with valid password
});

When('I click on the {string} button', function (name) {
  return page.click(loginPage.loginButton(name));  // Call the click method on the login button locator
});

When('I click on the signout button', function () {
  return page.click(loginPage.signoutBtn);  // Call the click method on the login button locator
});

When('I click on the {string} textlink', async function (name) {
  await page.click(loginPage.forgotpwd(name)); // Call the click method on the forgot link text locator
});

When("I wait {string} seconds", async function (seconds) {
  const timeout = parseInt(seconds, 10);
  await new Promise((resolve) => setTimeout(resolve, timeout * 1000)); // Multiply by 1000 to convert seconds to milliseconds
});

Then('the additional information banner should be visible', async () => {
  await expect(page.locator(loginPage.additionalInformationBanner)).toBeVisible();	
});


// Then('I should see enter email and password messages', async () => {
//   await expect(page.locator(loginPage.blankemail1)).toHaveText('Email Address is required');
//   await expect(page.locator(loginPage.blankpwd1)).toHaveText('Password is required');
// });

Then('I should see Account password text', async () => {
  await expect(page.locator(loginPage.Accountpwd)).toHaveText('Account password');});

Then('I should see Change Password text', async () => {
  await expect(page.locator(loginPage.changepwdtext)).toHaveText('Change Password');});



// Update password Erro messages


Then('I should see {string} text', async function (name) {
  await expect(page.locator(loginPage.updatePasswordError(name))).toBeVisible();
});


Then('I should see Unable to update password, please try again later text', async () => {
  await expect(page.locator(loginPage.unableToUpdatePwdError)).toHaveText('Unable to update password, please try again later');});

   
When('I enter password {string} for {string} field', async function (password, field) {
  await page.fill(loginPage.inputFieldForUpdatePwd(field),password);
});

// When ('I enter {?:SSN|DATE} {string} for {string} field', async function (value, field) {
//   await page.fill(loginPage.profileTab_SSNDob_InputField(field), value);
// });

// When('I enter SSN {string} text', async function (ssn) {
//   await page.fill(loginPage.profileTab_SSNDob_InputField, ssn);  // Replace with valid username
// });

When('I enter SSN {string} text', async function (ssn) {
  await page.fill(loginPage.SSn, ssn);  // Replace with valid username
    // Replace with valid password
});

When('I enter DATE {string} text', async function (date) {
  await page.fill(loginPage.dATE, date);  // Replace with valid username
    // Replace with valid password
});


When ('I enter Currentpwd {string} Newpwd {string} confirmpwd {string}', async function (current, New, confirm) {
  await page.fill(loginPage.inputFieldForUpdatePwd("Current Password"), current);
  await page.fill(loginPage.inputFieldForUpdatePwd("New Password"), New);
  await page.fill(loginPage.inputFieldForUpdatePwd("Confirm New Password"), confirm);

});

Then('I should see Sign in text', async () => {
  await expect(page.locator(loginPage.loginPageSigninHeading)).toHaveText('Sign in');});

//clear button
Then('the Submit button should be disabled again', async function () {
  const isDisabled = await page.locator('//button[contains(., "Submit")]').isDisabled();
  expect(isDisabled).toBe(true);
});

//Error message for attempt
Then('I should see You have {string} attempts remaining.', async function (name) {
  await expect(page.locator(loginPage.attemptLeftOnProfileTab(name))).toBeVisible();
  await page.waitForTimeout(6000);
});

Then('I should see Version {string} text', async function (versioname) {
  await expect(page.locator(loginPage.applicationVersion(versioname))).toBeVisible();
});

Then('I should see {string} on document page', async function (Document) {
  await expect(page.locator(loginPage.documentHeading(Document))).toBeVisible();
});

When('I click on {string} button', function (docBtnname) {
  return page.click(loginPage.viewDocumentbtn(docBtnname));  // Call the click method on the login button locator
});

Then('I should see identify {string} text', async function (identifyDocument) {
  await expect(page.locator(loginPage.identificationDocumentExample(identifyDocument))).toBeVisible();
  await page.waitForTimeout(2000);
});

Then('I should see steps {string} text', async function (uploadDoc) {
  await expect(page.locator(loginPage.howToUploadDocumentText(uploadDoc))).toBeVisible();
  await page.waitForTimeout(2000);
});


Then('I should see invalid {string} text', async function (invalidcred) {
  await expect(page.locator(loginPage.erroMessageIncorrectLogin(invalidcred))).toBeVisible();
});
