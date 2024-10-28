const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page-objects/login-page'); // Import the locator class
const { expect } = require('@playwright/test');

let loginPage=new LoginPage;  // Declare loginPage without initializing it



Given('I navigate to {string}', async function (url) {
  await page.goto(url);
});

When('I enter valid credentials', async function () {
  await page.fill(loginPage.usernameInput, 'tu-test40.reuse2@ccnoemail.com');  // Replace with valid username
  await page.fill(loginPage.passwordInput, 'BROKAW224573');  // Replace with valid password
});

When('I click on the {string} button', function (name) {
  return page.click(loginPage.loginButton(name));  // Call the click method on the login button locator
});



When("I wait {string} seconds", async function (seconds) {
  const timeout = parseInt(seconds, 10);
  await new Promise((resolve) => setTimeout(resolve, timeout * 1000)); // Multiply by 1000 to convert seconds to milliseconds
});

Then('the additional information banner should be visible', async () => {
  await expect(page.locator(loginPage.additionalInformationBanner)).toBeVisible();	
});


