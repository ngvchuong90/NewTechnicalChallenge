import { Page } from "@playwright/test";
import { Product } from "../dataObjects/type";
import globalState from "../utilities/globalState";
import { HeaderContainer } from "./headerContainer";

/**
 * Represents the product detail page of the application.
 */
class ProductDetailPage extends HeaderContainer {
  constructor(page: Page) {
    super(page);
  }

  //#region LOCATORS
  public get productBrandLabel() {
    return this.page.locator('//button[@title="//div[@class="product-content"]//div[@class="brand"]/span"]');
  }

  public get productNameLabel() {
    return this.page.locator('//div[@class="product-content"]//h1[@itemprop="name"]');
  }

  public currentSelectedSizeLabel(size: string) {
    return this.page.locator(`//div[@class="size-selection"]/p/span[text()="${size}"]`);
  }

  public selectSizeBtn(size: string) {
    return this.page.locator(`//ul[@class="size-buttons"]//button[text()="${size}"]`);
  }

  public get quantitySelectDropDown() {
    return this.page.locator('//div[@class="form-item quantity"]/select');
  }

  public quantitySelectOption(option: string) {
    return this.page.locator(`//div[@class="form-item quantity"]/select/option[text()="${option}"]`);
  }

  public get addToBagBtn() {
    return this.page.locator('//button[@title="Add to bag"]');
  }
  //#endregion

  //#region METHODS

  /**
   * Adds a product to the shopping bag.
   * @param {Object} params - The parameters for adding the product to the bag.
   * @param {Product} [params.product] - The product to add to the bag.
   * @param {string} [params.color] - The color of the product.
   * @param {string} [params.size] - The size of the product.
   * @param {number} [params.quantity=1] - The quantity of the product.
   */
  async addProductToBag({
    product = undefined,
    color = undefined,
    size = undefined,
    quantity = 1,
  }: {
    product?: Product | undefined;
    color?: string | undefined;
    size?: string | undefined;
    quantity?: number | undefined;
  }) {
    if (product !== undefined) {
      globalState.addToCart({ product, quantity });
    }

    if (color !== undefined) {
    }

    if (size !== undefined) {
      if (!(await this.currentSelectedSizeLabel(size).isVisible())) {
        await this.selectSizeBtn(size).click();
      }
    }

    if (quantity > 1) {
      await this.quantitySelectDropDown.selectOption({ label: `${quantity}` });
    }

    await this.addToBagBtn.click();

    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState("domcontentloaded");
  }
  //#endregion
}

export default ProductDetailPage;
