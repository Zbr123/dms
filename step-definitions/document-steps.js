const { Given, When, Then, And } = require('@cucumber/cucumber');
const DocumentPage = require('../page-objects/document-page');
const { expect } = require('@playwright/test');

let documentPage = new DocumentPage;

Then('I should see {string} on document page', async function (Document) {
    await expect(page.locator(documentPage.documentHeading(Document))).toBeVisible();
  });
  
  When('I click on {string} button on document page', function (docBtnname) {
    return page.click(documentPage.viewDocumentBtn(docBtnname));
  });
  
  Then('I should see {string} heading', async function (identifyDocument) {
    await expect(page.locator(documentPage.identificationDocumentExample(identifyDocument))).toBeVisible();
    await page.waitForTimeout(2000);
  });

  Then('I should see steps {string} text', async function (uploadDoc) {
    await expect(page.locator(documentPage.howToUploadDocumentText(uploadDoc))).toBeVisible();
    await page.waitForTimeout(2000);
  });