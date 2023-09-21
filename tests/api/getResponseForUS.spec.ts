import { test, expect, Page } from "@playwright/test";

test.describe("API Get the API response", () => {
  test("get API response", async ({ page }) => {
    const headers = {
      "X-RapidAPI-Key": "c1fc1391d2msh845472d334e00fep1a9126jsn3ce163516dab",
      //"X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    };

    let options = {
      method: "GET",
      url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart",
      headers: {
        "x-rapidapi-key": "c1fc1391d2msh845472d334e00fep1a9126jsn3ce163516dab",
      },
    };

    await page.setExtraHTTPHeaders(headers);
    const response = await page.request.get(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart",
      {
        params: {
          symbol: "NVDA",
          // interval: "1mo",
          // range: "5y",
          // region: "US",
        },
      }
    );
    await console.log(response.text());
    await expect(response.status()).toBe(200);
  });
});
