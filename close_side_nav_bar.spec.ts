import {test, expect} from "@playwright/test";
test("Close side nav bar", async({page})=>{
await page.goto("https://www.jdoodle.com/online-java-compiler");
await expect(page).toHaveTitle("Online Java Compiler - Online Java Editor -  Java Code Online")
const isSideBarIconsVisible=page.locator("//*[local-name()='svg' and @data-icon='rectangle-xmark']")
await expect(isSideBarIconsVisible).toBeVisible()
await page.locator("//*[local-name()='svg' and @data-icon='rectangle-xmark']").click();
test.setTimeout(120000)
await page.locator("//*[local-name()='svg' and @data-icon='square-caret-right']").isDisabled()
await page.close();
})