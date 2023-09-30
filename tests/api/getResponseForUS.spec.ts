import { test, expect } from "@playwright/test";
import { toDate } from "../pages/utils";

test.describe("API Get the API response and match with the UI", () => {
  test("get API response", async ({ page }) => {
    // Call get chart API and store the response
    const headers = {
      "X-RapidAPI-Key": "c1fc1391d2msh845472d334e00fep1a9126jsn3ce163516dab",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    };
    const response = await page.request.get(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart",
      {
        params: {
          symbol: "NVDA",
          interval: "1mo",
          range: "5y",
          region: "US",
        },
        headers: headers,
      }
    );
    expect(response.status()).toBe(200);
    const apiDojoResponse = await response.json();
    const dividends = apiDojoResponse.chart.result[0].events.dividends;
    const splits = apiDojoResponse.chart.result[0].events.splits;
    const apiSplitRatio =
      apiDojoResponse.chart.result[0].events.splits[1625112000].splitRatio;
    const apiSplitDateUnixFormat =
      apiDojoResponse.chart.result[0].events.splits[1625112000].date;
    const apiSplitDate = toDate(apiSplitDateUnixFormat);

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
    const splittedValue = splitValue.split(" ");

    const splitDate = (await splitDateLocator.innerText()).valueOf();
    const splittedDate = splitDate.split(" ");

    await expect(splittedValue[1]).toEqual(apiSplitRatio);
    await expect(splittedDate[1]).toEqual(apiSplitDate);
  });
});
