import test, { chromium, firefox } from "@playwright/test";

test('Launch Edge & Redbus navigation', async () => {

    const browser = await chromium.launch({ channel: 'msedge', headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redbus.in");
    console.log("RedBus Title:", await page.title());
    console.log("RedBus URL:", await page.url());


});

test('Launch firefox & Flipkart navigation', async () => {

    const browser1 = await firefox.launch({ headless: false });
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    await page1.goto("https://www.flipkart.com");
    console.log("flipkart Title:", await page1.title());
    console.log("flipkart URL:", await page1.url());


});