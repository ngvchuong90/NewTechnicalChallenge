# NewTechnicalChallenge

## Instructions to Run the Tests

1. **Install Dependencies**:

- Make sure you have Node.js installed (version >= 20.x).
- Then, install the project dependencies by running:

  ```sh
  npm install
  ```

2. **Run test command**

- **Way to implement test cases and run** So you can command spec if you don't want to run.

  - cart.dataDriven.spec.ts -> using data driven (for same data structure)
  - cart.spec.ts -> not use data driven, separated test data.

- **Browser for running and configuration**: For now, just comment some browsers not install yet for running container. If you want to run, please install it before run, if not, they will be failed.

- **Command for running**:

  ```sh
  npm run test:e2e
  ```

  ```sh
  npx playwright test
  ```

  Default run with chromium, if you want to run other browser, please take a look above to install correct browser you want to run and try to uncomment con playwright config file, after that, you can try with below command:

  bash

  ```sh
  BROWSER_NAME=chromium npx playwright test
  ```

  cmd

  ```
  set BROWSER_NAME=chromium && npx playwright test
  ```

  modify BROWSER_NAME=<variable> with supported browsers as playwright config

## Assumptions and Limitations

- **Assumptions**:

  - The tests assume that the application is accessible and the necessary elements are available on the page.
  - The product data used in the tests is assumed to be accurate and up-to-date.
  - The tests assume that the browser environment is consistent and there are no network issues.

- **Limitations**:
  - The tests may not cover all edge cases and scenarios. This means that there might be some situations or conditions that the tests do not account for, which could lead to unexpected behavior.
  - The tests are dependent on the structure and identifiers of the web elements. If the HTML structure or the IDs, classes, or other attributes of the elements change, the tests might fail or need to be updated.
  - The tests are limited to the functionality described in the test cases. They do not cover the entire application, so some features or workflows might not be tested.

## Handling Dynamic Scenarios

To handle dynamic scenarios such as searching or browsing for an in-stock product, the tests use the following approach:

- **Searching for a Product:** The searchProduct method in the LandingPage class is used to search for a product by its name. This method fills the search input and clicks the search button to initiate the search.

- **Clicking on a Product:** The clickOnProductDetailLink method in the SearchResultsPage class is used to click on the product link from the search results.

- **Adding a Product to the Bag:** The addProductToBag method in the ProductDetailPage class is used to add a product to the shopping bag. This method handles selecting the size, quantity, and clicking the "Add to Bag" button.

- Note: These methods ensure that the tests can dynamically interact with the application and handle scenarios where the product details may vary.

## Assessment Criteria

**Accuracy:**
The script handles the described flow correctly by following a structured approach to search for a product, click on the product detail link, and add the product to the shopping bag. The methods searchProduct, clickOnProductDetailLink, and addProductToBag are designed to perform these actions accurately.

**Reliability:**
The script includes error handling for dynamic scenarios by waiting for elements to be visible and ensuring the page is fully loaded before proceeding to the next step. For example, the waitForTimeout and waitForLoadState methods are used to handle dynamic content loading.

**Readability:**
The code is well-structured and documented. Each method has a clear purpose and is named appropriately. The README file provides detailed instructions and explanations, making it easy to understand the flow and functionality of the tests.

**Completeness:**
All the deliverables are provided. The README file includes instructions to run the tests, assumptions and limitations, a brief explanation of how dynamic scenarios are handled, and the assessment criteria. The code snippets demonstrate the implementation of the required functionalities.
