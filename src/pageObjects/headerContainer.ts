import { Page } from "@playwright/test";

export class HeaderContainer {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //#region LOCATORS
  public get navigationMenuBar() {
    return this.page.locator('//nav[@id="header-nav"]');
  }

  public get searchFormInp() {
    return this.page.locator('//input[@id="searchterm"]');
  }

  public get searchBtn() {
    return this.page.locator('//input[@id="searchterm"]/following-sibling::button[@type="submit"]');
  }

  //#endregion

  //#region METHODS

  /**
   * Searches for a product.
   * @param {string} productName - The name of the product to search for.
   */
  async searchProduct(productName: string) {
    await this.searchFormInp.fill(productName);
    await this.searchBtn.click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState("domcontentloaded");
  }
  //#endregion
}
