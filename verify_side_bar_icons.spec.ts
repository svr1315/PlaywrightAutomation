import {test, expect} from "@playwright/test";
test("Verify JDoodle side bar icons", async({page})=>{
await page.goto("https://www.jdoodle.com/online-java-compiler");
test.setTimeout(120000)
await expect(page).toHaveTitle("Online Java Compiler - Online Java Editor -  Java Code Online")
const isSideBarIconsVisible=page.locator("//*[local-name()='svg' and @data-icon='rectangle-xmark']")
test.setTimeout(120000)
await expect(isSideBarIconsVisible).toBeVisible()
await page.close();
})