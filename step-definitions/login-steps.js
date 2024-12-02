const { Given, When, Then, And } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');
const LoginPage = require('../page-objects/login-page');
const { expect } = require('@playwright/test');

let loginPage = new LoginPage;
let token;
let instanceUrl;
let apiResponse;
let createdEmail;
let fetchedPassword;


Given('I navigate to {string}',{ timeout: 10000 } , async function (url) {
  await page.goto(url, { waitUntil: 'load' });
});

When('I enter username {string} and {string} password on salesforce', async function (name, pass) {
  await page.fill(loginPage.usernameInputSalesforce, name);
  await page.fill(loginPage.passwordInputSalesforce, pass);
});

When('I enter username and password',{ timeout: 20000 }, async function () {
  await page.fill(loginPage.usernameInput, createdEmail);
  await page.fill(loginPage.passwordInput, fetchedPassword);
});

When('I click on the login button on salesforce',{ timeout: 20000 }, async function () {
  await page.click(loginPage.loginButtonSalesforce);
});

When('I search the created user on Salesforce',{ timeout: 60000 }, async function () {
  console.log(createdEmail);
  page.click(`button[aria-label='Search']`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.fill(loginPage.searchFieldSalesforce, createdEmail);
  await page.keyboard.press('Enter');
  await new Promise(resolve => setTimeout(resolve, 3000));
});

When('I click on the searched user on Salesforce',{ timeout: 20000 } ,async function () {
  await page.click(loginPage.userNameSalesforce)[0];
});

When('I get the password of searched user on Salesforce', { timeout: 30000 }, async function () {
  const detailsTabs = await page.locator(`//ul[@role='tablist']//li[contains(.,'Details')]`);
  await detailsTabs.nth(1).click();
  const passwordSelector = loginPage.getUserPassword(); 
  const passwordElement = await page.waitForSelector(passwordSelector, { timeout: 10000 });
  fetchedPassword = await passwordElement.textContent();
  assert(fetchedPassword, 'Password could not be fetched or is empty');
});

When('I click on the signout button', async function () {
  await page.click(loginPage.signoutBtn);
});


When('I wait for {int} seconds', { timeout: 300000 }, async function (seconds) {
  const milliseconds = seconds * 1000;
  await new Promise(resolve => setTimeout(resolve, milliseconds));
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

Given('I authenticate with Salesforce and retrieve an access token', async function () {
  const authResponse = await axios.post('https://test.salesforce.com/services/oauth2/token', null, {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
          grant_type: 'password',
          client_id: '3MVG98EE59.VIHmw6cKpbYy0Y0sTK_6S.qeQ5qAqIts3TUGk2qStnSYsygRK_v9xvaSBTro.cTsSOIfoPMlPF',
          client_secret: '2C4F313966599E24AD806E9E3395820EBF93591D2705F9737E4C2202FEEBD708',
          username: 'onpathtestuser@clearcaptions.com.ccstaging',
          password: 'TestAlorica1GHwLN8So5XIorzG9dEKhZ5Hr3',
      },
  });

  assert.strictEqual(authResponse.status, 200, 'Authentication failed');
  token = authResponse.data.access_token;
  instanceUrl = authResponse.data.instance_url;
});

// Step to make the second API call
When('I make a POST request to create an external vendor with random email', { timeout: 20000 }, async function () {
  assert(token, 'Token is not available. Authentication might have failed.');

  const randomHomePhone = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  createdEmail = `testuser${Math.floor(Math.random() * 10000)}@yopmail.com`;

  const requestBody = {
      DNIS: "8585654545",
      Email: createdEmail,
      FirstName: "alorica",
      LastName: "conversion",
      Hashearingaid: "Yes",
      HasHearingLoss: "Yes",
      HasHomePhone: "Yes",
      HasInternet: "Yes",
      HomePhoneServiceProvider: "TEST-TELCO",
      InternetServiceProvider: "TEST-ISP",
      HasSmartPhone: "No",
      HomePhone: randomHomePhone,
      LeadDisposition: "REP INSTALLATION",
      LeadSource: "Alorica",
      MailingCity: "Sacramento",
      MailingState: "CA",
      MailingStreet: "5320 Andrea Blvd",
      APT: "",
      MailingZipcode: "95842",
      MobilePhone: "",
      Product: "CLRCAP",
      SelfInstallation: "",
      ServiceNotes: "TESTING SF-3959",
      SmartPhoneType: "iOS",
      SpeakEnglish: "X",
      StartDate: "2024-10-01",
      StartTimeWindow: "2:00 pm - 4:00 pm",
      Dob: "1972-04-24",
      Last4SSN: "1234"
  };

  const vendorResponse = await axios.post(`${instanceUrl}/services/apexrest/ExternalVendorCreation/v1/`, requestBody, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
  });

  assert.strictEqual(vendorResponse.status, 200, 'Vendor creation failed');
  apiResponse = vendorResponse.data;
});

// Step to verify the API response
Then('I verify the response to ensure the vendor is created successfully', function () {
  assert(apiResponse, 'API response is not available');
  // Additional checks can be added based on the expected response schema
  console.log('API Response:', apiResponse);
});