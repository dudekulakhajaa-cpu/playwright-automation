const {test, expect} = require('@playwright/test');

/**
 * Playwright Test: Locators and Form Interaction Demo
 * 
 * This test demonstrates:
 * 1. Navigation to a login page
 * 2. Using CSS selectors to locate elements
 * 3. Filling form inputs with credentials
 * 4. Clicking buttons
 * 5. Handling dynamic content with automatic waiting
 * 6. Text extraction and assertion validation
 */

test("Locators supported by playwright", async({page}) => {
    // Navigate to the login page
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
    
    // Fill username field using ID selector (#username)
    // Playwright automatically waits for element to be visible (up to 5 seconds)
    await page.locator("input#username").fill("rahulshetty");
    
    // Fill password field using ID selector (#password)
    // Note: fill() method is preferred over deprecated type() method
    await page.locator("input#password").fill("learning");
    
    // Click login button using ID selector (#signInBtn)
    await page.locator("input#signInBtn").click();
    
    // Alternative: Extract text content from error message (commented out)
    // console.log(await page.locator("[style*='block']").textContent());
    
    // Assertion: Verify error message contains expected text
    // Playwright automatically waits for element with style containing 'block' to appear
    // Uses partial attribute matching with CSS selector [style*='block']
    // Assertion timeout: 5 seconds (configurable in playwright.config.js)
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
})

/**
 * KEY CONCEPTS DEMONSTRATED:
 * 
 * TIMEOUTS:
 * - Global test timeout: 30 seconds (configured in playwright.config.js)
 * - Assertion/expect timeout: 5 seconds (default for expect() statements)
 * - Playwright automatically waits for elements without explicit waits
 * 
 * LOCATOR STRATEGIES:
 * - CSS selectors are preferred (input#username, [style*='block'])
 * - Supports various CSS selector patterns:
 *   - ID: #elementId or tagName#elementId
 *   - Class: .className or tagName.className  
 *   - Attribute: [attributeName='value'] or tagName[attributeName='value']
 *   - Partial attribute: [style*='block'] (regular expression matching)
 * 
 * ELEMENT INTERACTIONS:
 * - page.goto(): Navigate to URL
 * - page.locator(): Find element(s) on page
 * - fill(): Enter text into input fields (replaces deprecated type())
 * - click(): Click buttons/interactive elements
 * - textContent(): Extract text content from elements
 * 
 * ASSERTIONS:
 * - expect().toContainText(): Verify element contains specific text
 * - Automatic waiting: Playwright waits for element before asserting
 * - Clear error messages on assertion failure
 * 
 * PLAYWRIGHT INTELLIGENCE:
 * - Automatically handles dynamic content loading
 * - No need for explicit waits in most scenarios
 * - Smart waiting for elements to be visible/interactable
 */