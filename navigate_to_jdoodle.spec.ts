import {test, expect} from "@playwright/test";
test("Open JDoodle and verify title", async({page})=>{
await page.goto("https://www.jdoodle.com/online-java-compiler");
test.setTimeout(120000)
await expect(page).toHaveTitle("Online Java Compiler - Online Java Editor -  Java Code Online")
await page.close();
})