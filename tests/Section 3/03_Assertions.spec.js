// Import Playwright's test runner and built-in assertion library
const { test, expect } = require('@playwright/test');

// Define a test case
test("Assertion for validating the page title", async ({ page }) => {
    // Navigate to the target URL (Google homepage)
    await page.goto("https://www.google.com");

    // Print the page title to the console for debugging/logging purposes
    console.log(await page.title());

    // Assertion: Verify that the page title matches the expected value
    // If the title is not "Google", the test will fail and a detailed report will be generated
    await expect(page).toHaveTitle("Google");
});

/*
================================================================================
NOTES
================================================================================
1. Importing:
   - `test` is used to define test cases.
   - `expect` is used for assertions (e.g., to check page title, URL, visibility).

2. Asynchronous Operations:
   - All Playwright actions (goto, click, fill, etc.) are async, so always use `await`.

3. Assertion Types:
   - `toHaveTitle` checks page title.
   - Other assertions: toHaveURL, toBeVisible, toContainText, etc.

4. Running in Different Browsers:
   - Run in Chrome:   npx playwright test --browser=chromium
   - Run in Firefox:  npx playwright test --browser=firefox
   - Run in WebKit:   npx playwright test --browser=webkit

5. Headless vs Headed Mode:
   - Headless mode (default) runs without opening browser UI.
   - Run in headed mode: npx playwright test --headed
   - Or set `use: { headless: false }` in playwright.config.js.

6. Error Handling:
   - If test fails, Playwright auto-generates an HTML report with screenshots.
   - Open report: npx playwright show-report

7. Maintenance Tip:
   - Keep locators and test data separate in dedicated files (Page Object Model).
   - Add comments for every major step to ease debugging and future updates.
================================================================================
*/
