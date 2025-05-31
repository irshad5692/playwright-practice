// pages/pageManager.js
const { LoginPage } = require('../pages/loginPage');
// const { HomePage } = require('./homePage');
// const { ProductPage } = require('./productPage');

class PageFactory {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {boolean} isMobile
   */

  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile

    this._loginPage = null;
    this._homePage = null;
    this._productPage = null;
  }

  /**
   * @returns {import('../pages/loginPage').LoginPage}
  */
  get loginPage() {
    if (!this._loginPage) 
    this._loginPage = new LoginPage(this.page, this.isMobile);
    return this._loginPage;
  }

  get homePage() {
    if (!this._homePage) this._homePage = new HomePage(this.page, this.isMobile);
    return this._homePage;
  }

  get productPage() {
    if (!this._productPage) this._productPage = new ProductPage(this.page, this.isMobile);
    return this._productPage;
  }

  async pause() {
    await this.page.pause();
  }

}

module.exports = { PageFactory };
