import {test, expect} from "@playwright/test";
test("expand coding ground", async({page})=>{
await page.goto("https://www.jdoodle.com/online-java-compiler");
await expect(page).toHaveTitle("Online Java Compiler - Online Java Editor -  Java Code Online")
const isExpandIconVisible=page.locator("//*[local-name()='svg' and @data-icon='expand']")
await expect(isExpandIconVisible).toBeVisible()
await page.locator("//*[local-name()='svg' and @data-icon='expand']").click()
test.setTimeout(120000)
await page.locator("//*[local-name()='svg' and @data-icon='compress']").isDisabled()
await page.close();
})