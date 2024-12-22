import { defineConfig, devices } from "@playwright/test";

const browserName = process.env.BROWSER_NAME || "chromium";
const projects = [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },
  // Uncomment the following lines to run tests on other browsers
  // {
  //   name: "firefox",
  //   use: { ...devices["Desktop Firefox"] },
  // },
  // {
  //   name: "Microsoft Edge",
  //   use: { ...devices["Desktop Edge"], channel: "msedge" },
  // },
  // {
  //   name: "Google Chrome",
  //   use: { ...devices["Desktop Chrome"], channel: "chrome" },
  // },
  // // If you want to run tests on mobile devices, uncomment the following lines and adjust the device name accordingly and handle code within the test file
  // {
  //   name: "webkit",
  //   use: { ...devices["Desktop Safari"] },
  // },
  // {
  //   name: "Mobile Chrome",
  //   use: { ...devices["Pixel 5"] },
  // },
  // {
  //   name: "Mobile Safari",
  //   use: { ...devices["iPhone 12"] },
  // },
].filter((project) => project.name === browserName.trim());

export default defineConfig({
  testDir: "./src/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    headless: true,
    baseURL: "https://www.davidjones.com",
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  projects: projects,
});
