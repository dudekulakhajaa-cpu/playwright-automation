// Importing 'test' from Playwright's test library
const { test } = require('@playwright/test');

/*
    Browser Context Test:
    - Demonstrates how to manually create a new browser context and page.
    - Useful when you want to run tests in a fresh browser instance (like incognito) 
      or inject cookies, proxies, or plugins.
*/
test("Browser context playwright test", async ({ browser }) => {
    // 'browser' is a Playwright fixture – globally available in all test blocks.
    // Fixtures are special variables provided by Playwright (e.g., browser, page, context).

    // Step 1: Create a new browser context
    // - A context is like a fresh browser profile (no cache, cookies, or plugins by default).
    // - You can inject cookies/proxy if needed using options in newContext().
    const context = await browser.newContext();

    // Step 2: Create a new page (tab) inside the context
    const page = await context.newPage();

    // Step 3: Navigate to target URL
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
});

/*
    Page Fixture Test:
    - Simpler way to start a test without manually creating context or page.
    - Playwright automatically creates a default browser context and page.
*/
test("Page playwright test", async ({ page }) => {
    // Here we directly use the 'page' fixture.
    // Playwright internally creates a default context and page for us.
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
});

/*
NOTES:
1. Fixtures:
   - Special global variables (browser, page, context, request) provided by Playwright.
   - Passed to test functions inside curly braces: async ({ browser }) => { ... }
   - Without curly braces, JS treats it as a normal variable.

2. Browser Context:
   - Represents an isolated browser session.
   - Can store cookies, cache, and plugins separate from other contexts.
   - Similar to Chrome's "New Incognito Window" – fresh and independent.

3. Page:
   - Represents a single browser tab.
   - All automation (goto, click, fill, etc.) is done on a page object.

4. async / await:
   - Required because Playwright operations are asynchronous.
   - await ensures each step completes before moving to the next.

5. When to use Browser Context vs Page Fixture:
   - Use 'browser.newContext()' if you need custom cookies, proxy, or isolated sessions.
   - Use 'page' fixture for simple tests with default settings.
*/
