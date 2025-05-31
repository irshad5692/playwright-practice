// utils/multiUserFixture.js
const { test: baseTest } = require('@playwright/test');
const { PageFactory } = require('./pageFactory');


// Creating page containers, depending on requirement use the pageContainer1/2 in the test cases
// Each pageContainer1/2 will launch separate browser session window

const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

exports.test = baseTest.extend({
  pageContainer1: async ({ browser }, use) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const isMobile = context1._options?.isMobile ?? false

    const pageContainer1 = new PageFactory(page1, isMobile);
    await page1.goto(URL);
    await use(pageContainer1);
    await context1.close();
  },

  pageContainer2: async ({ browser }, use) => {
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    const isMobile = context2._options?.isMobile ?? false

    const pageContainer2 = new PageFactory(page2, isMobile);
    await page2.goto(URL); 
    await use(pageContainer2);
    await context2.close();
  }
});
