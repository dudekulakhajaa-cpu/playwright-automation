const { test, expect } = require('@playwright/test');

test("Negative testing - incorrect credentials", async ({ page }) => {
  await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
  
  // Define locators with 'const' to avoid global variables
  const userName = page.locator("input#username");
  const password = page.locator("input#password");
  const signInBtn = page.locator("input#signInBtn");
  const errorMsg = page.locator("[style*='block']");
  
  // Test case 1: Incorrect username/password
  await userName.fill("rahulshetty");
  await password.fill("learning");
  await signInBtn.click();
  await expect(errorMsg).toContainText("Incorrect username/password.");
  
  // Test case 2: Empty username
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await signInBtn.click();
  console.log(await page.locator(".card-body").first().textContent());
  console.log(await page.locator(".card-body").nth(1).textContent());

});