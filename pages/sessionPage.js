
export class SessionPage {
      /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sessionTitle = page.locator('.title');

  }

  async assertSessionTitle(title) {
        await expect(this.sessionTitle).toContainText(title);
  }

}