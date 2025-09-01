const { test, expect } = require("@playwright/test");

test.describe("Login Tests", () => {
  let userName, password, signInBtn, errorMsg;

  test.beforeEach(async ({ page }) => {
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
    userName = page.locator("input#username");
    password = page.locator("input#password");
    signInBtn = page.locator("input#signInBtn");
    errorMsg = page.locator("[style*='block']");
  });

  test("Negative testing - incorrect credentials", async ({ page }) => {
    await userName.fill("rahulshetty");
    await password.fill("learning");
    await signInBtn.click();
    await expect(errorMsg).toContainText("Incorrect username/password.");
  });

  test("Positive testing - correct credentials", async ({ page }) => {
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await signInBtn.click();
    // You might want to add an assertion for successful login
    await expect(page).toHaveURL(/shop/); // Example: check if redirected to shop page
  });
});