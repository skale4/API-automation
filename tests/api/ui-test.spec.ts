import { test, expect } from "@playwright/test";

test.describe("API Get the API response and match with the UI", () => {
  test("get API response", async ({ page }) => {
    // Open the web application UI and compare values with response
    const splitValueLocator = await page.locator(
      "//div[@class='eventMarkers splits']//div[@class='ciq-field-dark']"
    );
    const splitDateLocator = await page.locator(
      "//div[@class='eventMarkers splits']//div[@class='ciq-field-light']"
    );
    const yearValueLocator = await page.locator(
      "//*[@data-test='rangeList']//*[text()='5Y']"
    );

    await page.goto("https://finance.yahoo.com/chart/NVDA");
    await yearValueLocator.click();
    const splitValue = (await splitValueLocator.innerText()).valueOf();
    // console.log("split values" + splitValue);
    const splittedValue = splitValue.split(" ");
    console.log("splittedValue:" + splittedValue[1]);

    const splitDate = (await splitDateLocator.innerText()).valueOf();
    // console.log("split date value: " + splitDate);
    const splittedDateValue = splitDate.split(" ");
    console.log("splittedValue:" + splittedDateValue[1]);

    await expect(splittedValue[1]).toEqual("4:1");
  });
});
