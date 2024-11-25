const { Given, When, Then, And } = require('@cucumber/cucumber');
const AppVersionPage = require('../page-objects/applicationversion-page');
const { expect } = require('@playwright/test');

let appVersionPage = new AppVersionPage;

Then('I should see Version {string} text', async function (versioname) {
    await expect(page.locator(appVersionPage.applicationVersion(versioname))).toBeVisible();
  });