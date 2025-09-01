const { test, expect } = require("@playwright/test");
test("Handling Static Drop Down", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  await page.locator(".checkmark").last().click();
  await page.locator("#okayBtn").click();
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  const dropDown = page.locator("select.form-control");
  await dropDown.selectOption("Student");
  await page.locator("#terms").check();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
});
