import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    // Use multiple selector fallbacks so the page-object works across different versions of the demo site
    this.usernameInput = page.locator('input[name="username"], #txtUsername, input[placeholder="Username"]');
    this.passwordInput = page.locator('input[name="password"], #txtPassword, input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"], input[type="submit"], #btnLogin');
  }

  async open() {
    await this.goto('https://opensource-demo.orangehrmlive.com/');
  }

  /**
   * Perform login using provided credentials.
   * Waits for navigation or a likely post-login marker.
   */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    // Click and wait for either navigation or a dashboard marker.
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {}),
      this.loginButton.click(),
    ]);
  }

  async isLoggedIn(): Promise<boolean> {
    const markers = [
      this.page.getByText('Dashboard'),
      this.page.getByText('Admin'),
      this.page.getByRole('button', { name: /Logout|Welcome/i }),
    ];

    for (const m of markers) {
      try {
        if (await m.first().isVisible({ timeout: 2000 })) return true;
      } catch (e) {
        // ignore and try next
      }
    }
    return false;
  }
}

export default LoginPage;
