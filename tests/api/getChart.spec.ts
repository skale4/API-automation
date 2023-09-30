import { test, expect } from "@playwright/test";
import { toDate } from "../pages/utils";
import { FinanceChartPage } from "../pages/verify-ui-data";

test.describe("Get the API response and match with the UI", () => {
  test("get API response and match with UI value", async ({ page }) => {
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
    const apiRegularMarketPrice =
      apiDojoResponse.chart.result[0].meta.regularMarketPrice;

    // Open the finance web application UI
    const financeUiPage = new FinanceChartPage(page);
    await financeUiPage.goToNvdaChartUrl();
    await financeUiPage.clickYearRangeButton();

    // Compare UI values with API response
    await expect(await financeUiPage.getSplittedValue()).toEqual(apiSplitRatio);
    await expect(await financeUiPage.getSplittedDate()).toEqual(apiSplitDate);
    await expect(String(apiRegularMarketPrice)).toEqual(
      await financeUiPage.getRegularMarketPrice()
    );
  });
});
