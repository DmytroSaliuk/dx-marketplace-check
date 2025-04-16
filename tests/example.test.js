const { test, expect } = require('@playwright/test');

test('Checking the availability of the site', async ({ page }) => {
  await page.goto('https://inventory.dev.dxm.digitalrealty.com/marketplace');

  const locator = page.locator('.navbar - title');
  await page.waitForSelector('.navbar - title', { timeout: 100000 });

  const content = await page.content();
  console.log(content);

  await expect(page.locator('/navbar - title')).toHaveText('Marketplace');
});












