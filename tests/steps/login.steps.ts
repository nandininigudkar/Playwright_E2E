import { Before, After, Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { LoginPage } from "../../pages/LoginPage";
import assert from "assert";

// Use Cucumber World (this) to store scenario-scoped objects.
Before(async function () {
  // Launch a fresh browser for each scenario and attach to the World
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  // attach to `this` so step implementations can access them reliably
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- attaching arbitrary properties to World
  this.browser = browser;
  // @ts-ignore
  this.page = page;
  // @ts-ignore
  this.loginPage = loginPage;
});

After(async function () {
  // @ts-ignore
  if (this.browser) await this.browser.close();
});

Given("I open the OrangeHRM demo page", async function () {
  // Use the POM attached to the World
  // @ts-ignore
  await this.loginPage.open();
});

When(
  "I login with username {string} and password {string}",
  async function (username: string, password: string) {
    // @ts-ignore
    await this.loginPage.login(username, password);
  },
);

Then("I should be logged in", async function () {
  // @ts-ignore
  const loggedIn = await this.loginPage.isLoggedIn();
  assert.strictEqual(loggedIn, true, "Expected user to be logged in");
});
