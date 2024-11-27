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

When('I click on the signout button', function () {
  return page.click(loginPage.signoutBtn);
});


When("I wait {string} seconds", async function (seconds) {
  const timeout = parseInt(seconds, 10);
  await new Promise((resolve) => setTimeout(resolve, timeout * 1000));
});


Then('I should see Account password text', async () => {
  await expect(page.locator(loginPage.heading)).toHaveText('Account password');
});

Then('I should see Change Password text', async () => {
  await expect(page.locator(loginPage.heading)).toHaveText('Change Password');
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

Then('I should see Sign in text', async () => {
  await expect(page.locator(loginPage.heading)).toHaveText('Sign in');
});



Then('I should see invalid {string} text', async function (invalidcred) {
  await expect(page.locator(loginPage.erroMessageIncorrectLogin(invalidcred))).toBeVisible();
});