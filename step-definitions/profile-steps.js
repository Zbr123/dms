const { Given, When, Then, And } = require('@cucumber/cucumber');
const ProfilePage = require('../page-objects/profile-page');
const { expect } = require('@playwright/test');

let profilePage = new ProfilePage;

Then('the additional information banner should be visible', async () => {
    await expect(page.locator(profilePage.additionalInformationBanner)).toBeVisible();
  });

  When('I enter SSN {string} text', async function (ssn) {
    await page.fill(profilePage.SSN, ssn);
  });

  When('I enter DATE {string} text', async function (date) {
    await page.fill(profilePage.DATE, date);
  });

  When('I click on the {string} button', function (name) {
    return page.click(profilePage.Button(name));
  });

  Then('the {string} button should be disabled again', async function (name) {
    const isDisabled = await page.locator(profilePage.Button(name)).isDisabled();
    expect(isDisabled).toBe(true);
  });

  Then('I should see You have {string} attempts remaining.', async function (name) {
    await expect(page.locator(profilePage.attemptLeftOnProfileTab(name))).toBeVisible();
    await page.waitForTimeout(6000);
  });

  When('I check the terms and conditions checkbox', async function () {
    // Wait for the checkbox element to be available
    await page.waitForSelector('#term-conditions', { timeout: 5000 });
  
    // Click on the checkbox to check it
    await page.click('#term-conditions');
  
    // Optionally, wait a little after checking the checkbox (if necessary)
    await page.waitForTimeout(500);
  });

  When('I scroll down the consent text', async function () {
    // Ensure the consent iframe is loaded
    await page.waitForSelector('.consent-iframe', { timeout: 5000 });
  
    // Select the inner consent text element
    const consentTextElement = await page.$('.consent-iframe');
  
    // Quickly scroll to the bottom of the consent text
    await page.evaluate(async (element) => {
      // Scroll directly to the bottom
      element.scrollTop = element.scrollHeight;
    }, consentTextElement);
  
    // Optionally, wait a little after scrolling (if necessary)
    await page.waitForTimeout(500);
  });

  When('I scroll down the outer popup of e-signature consent', async function () {
    // Ensure the outer popup element is loaded
    await page.waitForSelector('.modelConsent', { timeout: 5000 });
  
    // Select the outer popup element
    const outerPopupElement = await page.$('.modelConsent');
  
    // Quickly scroll to the bottom of the outer popup
    await page.evaluate(async (element) => {
      element.scrollTop = element.scrollHeight;  // Directly scroll to the bottom
    }, outerPopupElement);
  
    // Optionally, wait a little after scrolling (if necessary)
    await page.waitForTimeout(500);
  });
  
  When('I scroll down the outer popup of self certification consent', async function () {
    // Ensure the outer popup element is loaded
    await page.waitForSelector('.MuiBox-root', { timeout: 5000 });
    
    // Select the outer popup element
    const outerPopupElement = await page.$('.MuiBox-root');
    
    // Quickly scroll to the bottom of the outer popup
    await page.evaluate(async (element) => {
      element.scrollTop = element.scrollHeight;  // Directly scroll to the bottom
    }, outerPopupElement);
    
    // Optionally, wait a little after scrolling (if necessary)
    await page.waitForTimeout(500);
  });
  
  When('I scroll down the outer popup of terms of service consent', async function () {
    // Ensure the outer popup element is loaded
    await page.waitForSelector('.consent_numbering', { timeout: 5000 });
    
    // Select the outer popup element
    const outerPopupElement = await page.$('.consent_numbering');
    
    // Quickly scroll to the bottom of the outer popup
    await page.evaluate(async (element) => {
      element.scrollTop = element.scrollHeight;  // Directly scroll to the bottom
    }, outerPopupElement);
    
    // Optionally, wait a little after scrolling (if necessary)
    await page.waitForTimeout(500);
  });

  When('I scroll down the outer popup of URD consent', async function () {
    // Ensure the outer popup element is loaded
    await page.waitForSelector('.modelConsent', { timeout: 5000 });
  
    // Select the outer popup element
    const outerPopupElement = await page.$('.modelConsent');
  
    // Quickly scroll to the bottom of the outer popup
    await page.evaluate(async (element) => {
      element.scrollTop = element.scrollHeight;  // Directly scroll to the bottom
    }, outerPopupElement);
  
    // Optionally, wait a little after scrolling (if necessary)
    await page.waitForTimeout(500);
  });