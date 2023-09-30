import { setCookieVals } from "../pages/utils";
import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const cookieVals = await setCookieVals();
  await page.context().addCookies(cookieVals);
  await page
    .context()
    .storageState({ path: "./accepted-cookies-in-test.json" });
  await page.context().clearCookies();
}

export default globalSetup;
