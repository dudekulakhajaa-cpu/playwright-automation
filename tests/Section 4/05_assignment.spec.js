const {test} = require('@playwright/test')

test("Login Test and grab the first the title of the prouct",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("dudekula.khajaa@gmail.com");
    await page.locator("#userPassword").fill("Kh@jash@el20!00")
    await page.locator("#login").click();
    console.log(await page.locator(".card-body h5").nth(0).textContent());
})