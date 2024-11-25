const { Given, When, Then, And } = require('@cucumber/cucumber');
const LoginPage = require('../page-objects/login-page');
const { expect } = require('@playwright/test');

let loginPage = new LoginPage;


Given('I navigate to {string}', async function (url) {
  await page.goto(url, { waitUntil: 'load' });
});

When('I enter username {string} and {string} password', async function (name, pass) {
  await page.fill(loginPage.usernameInput, name);
  await page.fill(loginPage.passwordInput, pass);
});

When('I click on the {string} button', function (name) {
  return page.click(loginPage.Button(name));
});

When('I click on the signout button', function () {
  return page.click(loginPage.signoutBtn);
});

When('I click on the {string} textlink', async function (name) {
  await page.click(loginPage.forgotPwd(name));
});

When("I wait {string} seconds", async function (seconds) {
  const timeout = parseInt(seconds, 10);
  await new Promise((resolve) => setTimeout(resolve, timeout * 1000));
});

Then('the additional information banner should be visible', async () => {
  await expect(page.locator(loginPage.additionalInformationBanner)).toBeVisible();
});

Then('I should see Account password text', async () => {
  await expect(page.locator(loginPage.AccountPwd)).toHaveText('Account password');
});

Then('I should see Change Password text', async () => {
  await expect(page.locator(loginPage.changePwdText)).toHaveText('Change Password');
});

Then('I should see {string} text', async function (error) {
  await expect(page.locator(loginPage.updatePasswordError(error))).toBeVisible();
});

Then('I {string} see {string} text', async (state,error) => {
  const locator = page.locator(loginPage.unableToUpdatePwdError);
  if (state === 'should') {
    await expect(locator).toHaveText(error);
  } else if (state === 'should not') {
    await expect(locator).not.toHaveText(error);
  } 
});

When('I enter password {string} for {string} field', async function (password, field) {
  await page.fill(loginPage.inputFieldForUpdatePwd(field), password);
});

When('I enter SSN {string} text', async function (ssn) {
  await page.fill(loginPage.SSN, ssn);
});

When('I enter DATE {string} text', async function (date) {
  await page.fill(loginPage.DATE, date);
});

When('I enter Currentpwd {string} Newpwd {string} confirmpwd {string}', async function (current, New, confirm) {
  await page.fill(loginPage.inputFieldForUpdatePwd("Current Password"), current);
  await page.fill(loginPage.inputFieldForUpdatePwd("New Password"), New);
  await page.fill(loginPage.inputFieldForUpdatePwd("Confirm New Password"), confirm);
});

Then('I should see Sign in text', async () => {
  await expect(page.locator(loginPage.loginPageSigninHeading)).toHaveText('Sign in');
});

Then('the {string} button should be disabled again', async function (name) {
  const isDisabled = await page.locator(loginPage.Button(name)).isDisabled();
  expect(isDisabled).toBe(true);
});

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

When('I click on {string} button on document page', function (docBtnname) {
  return page.click(loginPage.viewDocumentBtn(docBtnname));
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