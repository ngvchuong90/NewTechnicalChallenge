import { expect, test } from "@playwright/test";
import { Product } from "../dataObjects/type";
import CartSummaryPanel from "../pageObjects/cartSummaryPanel";
import LandingPage from "../pageObjects/landingPage";
import ProductDetailPage from "../pageObjects/productDetailPage";
import SearchResultsPage from "../pageObjects/searchResultsPage";

test.describe("Add to Bag Flow", () => {
  let landingPage: LandingPage;
  let searchResultsPage: SearchResultsPage;
  let productDetailPage: ProductDetailPage;
  let cartSummaryPanel: CartSummaryPanel;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    searchResultsPage = new SearchResultsPage(page);
    productDetailPage = new ProductDetailPage(page);
    cartSummaryPanel = new CartSummaryPanel(page);
  });

  test("Add single-size product to the bag", async () => {
    let singleSizeProduct: Product = {
      id: "",
      name: "VARIEGATED STRIPE POLO",
      price: 59.95,
      originalPrice: 79.95,
      img: "",
      url: "",
      cats: ["Brand", "Gant", "Clothing"],
      groupcode: "1231239",
      brand: "SEED HERITAGE",
      product_attributes: {
        color_id: "color124",
        size_id: "XXS",
        add_to_cart_id: "cart124",
        category_id: "category124",
      },
      formattedPrice: "59.95",
      originalFormattedPrice: "79.95",
    };

    let singleSizeProductQuantity = 2;

    // Step 1: Start on the homepage of the website
    // Verify the homepage has loaded by checking for a specific element
    await landingPage.open();
    await expect(landingPage.navigationMenuBar).toBeVisible();

    // Step 2: Search or browse to find a product that has stock available
    // Verify product is available
    await landingPage.searchProduct(singleSizeProduct.name);
    await expect(searchResultsPage.productDetailLinkByName(singleSizeProduct.name)).toBeVisible();

    await searchResultsPage.clickOnProductDetailLink(singleSizeProduct.name);
    await expect(productDetailPage.productNameLabel).toBeVisible();

    // Step 3: Add the product to the shopping bag
    await productDetailPage.addProductToBag({
      product: singleSizeProduct,
      size: singleSizeProduct.product_attributes.size_id,
      quantity: singleSizeProductQuantity,
    });

    // Step 4: Verify that the product is successfully added to the bag in the selected size and quantity
    expect(await cartSummaryPanel.itemBrandLabelByIndex(1).innerText()).toBe(singleSizeProduct.brand.toUpperCase());
    expect(await cartSummaryPanel.itemNameLabelByIndex(1).innerText()).toBe(singleSizeProduct.name.toUpperCase());
    expect(await cartSummaryPanel.itemSizeLabelByIndex(1).innerText()).toBe(
      singleSizeProduct.product_attributes.size_id
    );
    expect(await cartSummaryPanel.itemQuantityLabelByIndex(1).innerText()).toBe(singleSizeProductQuantity.toString());
  });

  test("Add multiple-size product to the bag", async () => {
    let multiSizeProduct: Product = {
      id: "",
      name: "Classic Fit Polo Bear Jersey T-Shirt",
      price: 96.75,
      originalPrice: 129.0,
      img: "",
      url: "",
      cats: ["Brand", "Gant", "Clothing"],
      groupcode: "2740069",
      brand: "Polo Ralph Lauren",
      product_attributes: {
        color_id: "color123",
        size_id: "S",
        add_to_cart_id: "cart123",
        category_id: "category123",
      },
      formattedPrice: "96.75",
      originalFormattedPrice: "129.00",
    };

    let multiSizeProductQuantity = 1;

    // Step 1: Start on the homepage of the website
    // Verify the homepage has loaded by checking for a specific element
    await landingPage.open();
    await expect(landingPage.navigationMenuBar).toBeVisible();

    // Step 2: Search or browse to find a product that has stock available
    // Verify product is available
    await landingPage.searchProduct(multiSizeProduct.name);
    await expect(searchResultsPage.productDetailLinkByName(multiSizeProduct.name)).toBeVisible();

    await searchResultsPage.clickOnProductDetailLink(multiSizeProduct.name);
    await expect(productDetailPage.productNameLabel).toBeVisible();

    // Step 3: Add the product to the shopping bag
    await productDetailPage.addProductToBag({
      product: multiSizeProduct,
      size: multiSizeProduct.product_attributes.size_id,
      quantity: multiSizeProductQuantity,
    });

    // Step 4: Verify that the product is successfully added to the bag in the selected size and quantity
    expect(await cartSummaryPanel.itemBrandLabelByIndex(1).innerText()).toBe(multiSizeProduct.brand.toUpperCase());
    expect(await cartSummaryPanel.itemNameLabelByIndex(1).innerText()).toBe(multiSizeProduct.name.toUpperCase());
    expect(await cartSummaryPanel.itemSizeLabelByIndex(1).innerText()).toBe(
      multiSizeProduct.product_attributes.size_id
    );
    expect(await cartSummaryPanel.itemQuantityLabelByIndex(1).innerText()).toBe(multiSizeProductQuantity.toString());
  });
});