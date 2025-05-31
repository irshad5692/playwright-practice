// pages/loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {boolean} isMobile
   */
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    // this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    if (this.isMobile) {
      console.log('Launched mobile browser')
    } else {
      console.log('Launched Desktop browser')
    }

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }

  async assertInvalidLogin() {
    await expect(this.errorMessage).toContainText('Invalid credentials');
  }
}

module.exports = { LoginPage };
