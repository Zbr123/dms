const { Given, When, Then, And } = require('@cucumber/cucumber');
const UpdatePasswordPage = require('../page-objects/updatepassword-page');
const { expect } = require('@playwright/test');

let updatePasswordPage = new UpdatePasswordPage;

When('I enter Currentpwd {string} Newpwd {string} confirmpwd {string}', async function (current, New, confirm) {
    await page.fill(updatePasswordPage.inputFieldForUpdatePwd("Current Password"), current);
    await page.fill(updatePasswordPage.inputFieldForUpdatePwd("New Password"), New);
    await page.fill(updatePasswordPage.inputFieldForUpdatePwd("Confirm New Password"), confirm);
  });

  When('I enter password {string} for {string} field', async function (password, field) {
    await page.fill(updatePasswordPage.inputFieldForUpdatePwd(field), password);
  });
  