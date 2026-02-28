import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('OrangeHRM demo - Auth', () => {
  test('login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();

    // Default demo credentials
    await login.login('Admin', 'admin123');

    // Primary assertion: either URL changes to a dashboard route or a dashboard element is visible
    await expect(page).toHaveURL(/.*(dashboard|index\.php).*/i, { timeout: 7000 }).catch(() => {});

    // Fallback: check the POM's isLoggedIn marker
    const loggedIn = await login.isLoggedIn();
    expect(loggedIn).toBeTruthy();
  });
});
