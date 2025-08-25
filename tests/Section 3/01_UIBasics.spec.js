// Importing the 'test' function from Playwright's test library
const { test } = require('@playwright/test');

// Define a test case using Playwright
test("First Playwright test", async () => {
    // NOTE: JavaScript is asynchronous by default.
    // Playwright commands return Promises that must be awaited.

    // Step 1 - Open browser
    // await page.goto('https://example.com');
    // 'await' pauses the execution until the page is fully loaded.

    // Step 2 - Enter username and password, wait for 2 seconds
    // await page.fill('#username', 'testUser');
    // await page.fill('#password', 'testPassword');
    // await page.waitForTimeout(2000); // Explicit wait for 2 seconds

    // Step 3 - Click on the submit button
    // await page.click('#submit');

    // IMPORTANT:
    // - All asynchronous steps will run one after another when 'await' is used.
    // - 'await' works only inside functions marked as 'async'.
    // - If the function does not have a name (like here), it is called an anonymous function.
});
