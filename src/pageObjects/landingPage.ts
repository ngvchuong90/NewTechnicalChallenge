import { Page } from "@playwright/test";
import { HeaderContainer } from "./headerContainer";

/**
 * Represents the landing page of the application.
 */
class LandingPage extends HeaderContainer {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the landing page.
   */
  async open() {
    await this.page.goto("", { waitUntil: "domcontentloaded" });
  }
}

export default LandingPage;
