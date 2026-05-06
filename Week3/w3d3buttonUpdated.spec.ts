import { expect, test } from "@playwright/test";

test('Leafground dropdown', async ({ page }) => {
    //Navigate to  https://leafground.com/button.xhtml  
    await page.goto("https://leafground.com/button.xhtml");
    
    
//Write a script to click the button and confirm a title change or any visible response.  
const confirmTitle =  page.getByRole('button',{name:'Click'}).click();
await page.waitForTimeout(2000)

let pageTitle = 'Dashboard'
let expectedTitle = await page.title()
console.log(expectedTitle);

expect.soft(expectedTitle).toBe(pageTitle);
console.log("Title has been changed");

//Assert the disabled state of a button.  
await page.locator('//i[@class="pi pi-server layout-menuitem-icon"]').click();
await page.locator('//span[text()="Button"]').click();

const disabledButton =  page.getByRole('button',{name:'Disabled'})
await expect(disabledButton).toBeDisabled()

});



