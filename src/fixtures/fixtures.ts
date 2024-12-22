import { test as baseTest } from "@playwright/test";

type CustomFixtures = {
  customPage: string;
};

export const test = baseTest.extend<CustomFixtures>({
  page: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("");
    await use(page);
    await context.close();
  },
});
