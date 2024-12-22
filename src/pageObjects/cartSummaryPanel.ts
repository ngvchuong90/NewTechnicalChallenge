import { type Page } from "@playwright/test";

/**
 * Represents the cart summary panel of the application.
 */
class CartSummaryPanel {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //#region LOCATORS
  public itemBrandLabelByIndex(index: number) {
    return this.page.locator(`//div[@class="cart-summary loaded"]//tbody/tr[${index}]/td//div[@class="brand"]/span`);
  }

  public itemNameLabelByIndex(index: number) {
    return this.page.locator(`//div[@class="cart-summary loaded"]//tbody/tr[${index}]/td//*[@class="item-name"]/a`);
  }

  public itemSizeLabelByIndex(index: number) {
    return this.page.locator(`//div[@class="cart-summary loaded"]//tbody/tr[${index}]/td//*[@class="size"]/span[2]`);
  }

  public itemColorLabelByIndex(index: number) {
    return this.page.locator(`//div[@class="cart-summary loaded"]//tbody/tr[${index}]/td//*[@class="color"]/span[2]`);
  }

  public itemQuantityLabelByIndex(index: number) {
    return this.page.locator(
      `//div[@class="cart-summary loaded"]//tbody/tr[${index}]/td//*[@class="quantity"]/span[2]`
    );
  }
  //#endregion

  //#region METHODS

  /**
   * Retrieves the brand name of an item in the cart summary panel by its index.
   * @param index - The index of the item in the cart summary panel.
   * @returns A promise that resolves to the brand name of the item.
   */
  async getItemBrandByIndex(index: number) {
    return await this.itemBrandLabelByIndex(index).innerText();
  }

  /**
   * Retrieves the name of an item in the cart summary panel by its index.
   *
   * @param index - The index of the item in the cart summary panel.
   * @returns A promise that resolves to the name of the item as a string.
   */
  async getItemNameByIndex(index: number) {
    return await this.itemNameLabelByIndex(index).innerText();
  }

  /**
   * Retrieves the size of an item in the cart summary panel by its index.
   *
   * @param index - The index of the item in the cart summary panel.
   * @returns A promise that resolves to the size of the item as a string.
   */
  async getItemSizeByIndex(index: number) {
    return await this.itemSizeLabelByIndex(index).innerText();
  }

  /**
   * Retrieves the color of an item in the cart summary panel by its index.
   *
   * @param index - The index of the item in the cart summary panel.
   * @returns A promise that resolves to the color of the item as a string.
   */
  async getItemColorByIndex(index: number) {
    return await this.itemColorLabelByIndex(index).innerText();
  }

  /**
   * Retrieves the quantity of an item in the cart summary panel by its index.
   *
   * @param index - The index of the item in the cart summary panel.
   * @returns A promise that resolves to the quantity of the item as a string.
   */
  async getItemQuantityByIndex(index: number) {
    return await this.itemQuantityLabelByIndex(index).innerText();
  }
  //#endregion
}

export default CartSummaryPanel;
