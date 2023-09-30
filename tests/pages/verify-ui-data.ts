import { Locator, Page } from "@playwright/test";

export class FinanceChartPage {
  readonly page: Page;
  readonly splitValueLocator: Locator;
  readonly splitDateLocator: Locator;
  readonly yearValueLocator: Locator;
  readonly regularMarketPriceLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.splitValueLocator = this.page.locator(
      "//div[@class='eventMarkers splits']//div[@class='ciq-field-dark']"
    );
    this.splitDateLocator = this.page.locator(
      "//div[@class='eventMarkers splits']//div[@class='ciq-field-light']"
    );
    this.yearValueLocator = this.page.locator(
      "//*[@data-test='rangeList']//*[text()='5Y']"
    );
    this.regularMarketPriceLocator = this.page.locator(
      "[data-test='qsp-price'][data-field='regularMarketPrice']"
    );
  }

  async goToNvdaChartUrl() {
    await this.page.goto("https://finance.yahoo.com/chart/NVDA");
  }

  async clickYearRangeButton() {
    await this.yearValueLocator.click();
  }

  async getSplittedValue() {
    const splittedValue = (await this.splitValueLocator.innerText())
      .valueOf()
      .split(" ");
    return splittedValue[1];
  }

  async getSplittedDate() {
    const splittedDate = (await this.splitDateLocator.innerText())
      .valueOf()
      .split(" ");
    return splittedDate[1];
  }

  async getRegularMarketPrice() {
    const regularMarketPrice = (
      await this.regularMarketPriceLocator.innerText()
    ).valueOf();
    return regularMarketPrice;
  }
}
