const { Given, When, Then, And } = require('@cucumber/cucumber');
const ProfilePage = require('../page-objects/profile-page');
const { expect } = require('@playwright/test');

let profilePage = new ProfilePage;

Then('the additional information banner should be visible', async () => {
    await expect(page.locator(profilePage.additionalInformationBanner)).toBeVisible();
  });

  When('I enter SSN {string} text', async function (ssn) {
    await page.fill(loginPage.SSN, ssn);
  });

  When('I enter DATE {string} text', async function (date) {
    await page.fill(loginPage.DATE, date);
  });

  When('I click on the {string} button', function (name) {
    return page.click(loginPage.Button(name));
  });

  Then('the {string} button should be disabled again', async function (name) {
    const isDisabled = await page.locator(loginPage.Button(name)).isDisabled();
    expect(isDisabled).toBe(true);
  });

  Then('I should see You have {string} attempts remaining.', async function (name) {
    await expect(page.locator(loginPage.attemptLeftOnProfileTab(name))).toBeVisible();
    await page.waitForTimeout(6000);
  });