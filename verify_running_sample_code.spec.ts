import {test, expect} from "@playwright/test";
test("Verify running sample code", async({page})=>{
await page.goto("https://www.jdoodle.com/online-java-compiler");
await expect(page).toHaveTitle("Online Java Compiler - Online Java Editor -  Java Code Online")
await page.locator('button:has-text("Execute")').click();
await page.locator('#output > div.ace_scroller > div > div.ace_layer.ace_text-layer > div:nth-child(1):has-text("Sum of x+y = 35")');
await page.close();
})