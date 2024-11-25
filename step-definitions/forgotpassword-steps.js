const { Given, When, Then, And } = require('@cucumber/cucumber');
const ForgotPasswordPage = require('../page-objects/forgotpassword-page');
const { expect } = require('@playwright/test');

let forgotPasswordPage = new ForgotPasswordPage;

When('I click on the {string} textlink', async function (name) {
    await page.click(forgotPasswordPage.forgotPwd(name));
  });