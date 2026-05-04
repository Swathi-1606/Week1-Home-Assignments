import test from "@playwright/test";

test('Laeftaps edit Lead',async({page})=>{

//Launch the browser 
await page.goto("http://leaftaps.com/opentaps/control/login");
//Enter the username
await page.locator('//label[text()="Username"]').fill("demoCSR2"); 
//Enter the password 
await page.locator('//input[@id="password"]').fill("crmsfa");
//Click Login 
await page.locator('//input[@class="decorativeSubmit"]').click();
//Click CRM/SFA link 
await page.locator('//div[@id="label"]').click();
await page.waitForTimeout(2000)
//Click Leads link
await page.locator('//a[text()="Leads"]').click();
//Click on Create Lead 
await page.locator('//a[text()="Create Lead"]').click();
//Enter company name 
await page.locator('//input[@id="createLeadForm_companyName"]').fill("XYZ");
//Enter first name 
await page.locator('//input[@id="createLeadForm_firstName"]').fill("Swathi");
//Enter last name 
await page.locator('//input[@id="createLeadForm_lastName"]').fill("S");
//Click on Create Lead button   
await page.locator('//input[@class="smallSubmit"]').click();
//Click Edit 
await page.locator('//a[text()="Edit"]').click();
//Change the company name 
await page.locator('//input[@id="updateLeadForm_companyName"]').fill("ABC");
//Click Update
await page.locator('(//input[@class="smallSubmit"])[1]').click(); 

});




