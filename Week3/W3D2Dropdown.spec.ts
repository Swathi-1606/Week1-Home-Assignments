import { test } from "@playwright/test";

test('Leafground dropdown', async ({ page }) => {
    //Navigate to https://leafground.com/select.xhtml 
    await page.goto("https://leafground.com/select.xhtml ");
    
    //Select your favorite UI automation tool using the different select options 
    await page.selectOption('//select[@class="ui-selectonemenu"]', { label: 'Playwright' })
    
    //Get the count and print of all the values 
    const dropdown = page.locator('//select[@class="ui-selectonemenu"]/option')
    const dropdownCount = await dropdown.count()
    console.log(`No of value in the dropdown is ${dropdownCount}`);
    await page.waitForTimeout(2000)

    for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText());
    }
    await page.waitForTimeout(2000)

    //Choose your preferred Country 
    await page.locator('//label[text()="Select Country"]').click()
    await page.locator('//li[text()="India"]').click()

    //Confirm Cities belongs to Country is loaded 
    await page.locator('//label[text()="Select City"]').click()
    await page.locator('//li[text()="Chennai"]').click()

    //Choose any three courses from the dropdown 
    await page.locator('//span[@class="ui-button-text"]').click()
    await page.locator('//li [@data-item-label="Playwright"]').click()
    await page.locator('//span[@class="ui-button-text"] ').click()
    await page.locator('//li [@data-item-label="ReactJs"]').click()
    await page.locator('//span[@class="ui-button-text"] ').click()
    await page.locator('//li [@data-item-label="PostMan"]').click()

    //Choose a language and print all the values from the dropdown.    
    await page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[3]').click();
    await page.locator('//li[text()="English"]').click();

    const dropdown1 = page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[3]/option')
    const dropdownCount1 = await dropdown1.count()
    console.log(`No of value in the dropdown1 is ${dropdownCount1}`);
    await page.waitForTimeout(2000)

    for (let index = 0; index < dropdownCount1; index++) {
        console.log(await dropdown1.nth(index).innerText());
    }
    await page.waitForTimeout(2000)

    //Select 'Two' irrespective of the language chosen    
    await page.locator('(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[4]').click();
    await page.locator('//li[text()="Two"]').click();


});



