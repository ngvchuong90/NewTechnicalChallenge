import { Page } from "@playwright/test";
import { HeaderContainer } from "./headerContainer";

/**
 * Represents the search results page of the application.
 */
class SearchResultsPage extends HeaderContainer {
  constructor(page: Page) {
    super(page);
  }

  //#region LOCATORS
  public productDetailLinkByName(productName: string) {
    return this.page.locator(`//div[@class="products"]/div/div/h4/a[text()="${productName}"]`);
  }
  //#endregion

  //#region METHODS

  /**
   * Clicks on a product detail link.
   * @param {string} productName - The name of the product to click on.
   */
  async clickOnProductDetailLink(productName: string) {
    await this.productDetailLinkByName(productName).click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState("domcontentloaded");
  }
  //#endregion
}

export default SearchResultsPage;
