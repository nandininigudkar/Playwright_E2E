import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const lp = new LoginPage(page);
    await use(lp);
  },
});

export { expect } from "@playwright/test";
