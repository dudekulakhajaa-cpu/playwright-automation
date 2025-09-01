const { test } = require('@playwright/test');

test("Negative testing - incorrect credentials", async ({ page }) => {
  await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("input#username");
  const password = page.locator("input#password");
  const signInBtn = page.locator("input#signInBtn");
  const cardTitle = page.locator(".card-body a");
  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await signInBtn.click();
  console.log(await cardTitle.first().textContent());
  console.log(await cardTitle.nth(1).textContent());
  const allTitles = await cardTitle.allTextContents();
  console.log(allTitles)

});