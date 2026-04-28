import test, { chromium } from "@playwright/test";

test('Login to Salesforce', async () => {
    const browser = await chromium.launch({ channel: 'chromium', headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://login.salesforce.com/ ");
    console.log(await page.title());
    console.log(await page.url());
    await page.waitForTimeout(2000);

    //Enter username
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    //Enter password
    await page.locator('[name="pw"]').fill("TestLeaf@2025");
    //Click Login button
    await page.locator('#Login').click();
    //wait for 10sec
    await page.waitForTimeout(10000);
    //printing title
    console.log("Title of the page is:", await page.title());
    //printing url
    console.log("URL of the page is:", await page.url());

    await browser.close();

}
);


