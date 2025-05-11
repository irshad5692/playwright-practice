// utils/multiUserFixture.js
const { test: baseTest } = require('@playwright/test');
const { PageFactory } = require('../util/pageFactory');

// Creating page containers, depending on requirement use the pageContainer1/2 in the test cases
// Each pageContainer1/2 will launch separate browser session window

const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

exports.test = baseTest.extend({
  pageContainer1: async ({ browser }, use) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const pageContainer1 = new PageFactory(page1);
    
    await page1.goto(URL);
    await use(pageContainer1);
    await context1.close();
  },

  pageContainer2: async ({ browser }, use) => {
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    const pageContainer2 = new PageFactory(page2);
    
    await page2.goto(URL); 
    await use(pageContainer2);
    await context2.close();
  }
});
