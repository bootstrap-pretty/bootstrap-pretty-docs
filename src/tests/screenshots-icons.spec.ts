import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1200, height: 630 } });

test('og - take screenshot of icons', async ({ page }) => {
     // Navigate to the URL
     await page.goto(`/share-images/icons`);

     // Show element
     const elementLocator = await page.locator('#playwrightIconSq');
     await elementLocator.evaluate(node => node.classList.remove('d-none'));

     // Wait for fonts to load
     await page.evaluate(() => document.fonts.ready);
     
     // Take screenshot
     await elementLocator.screenshot({path: `./public/images/playwright/share-images/bootstrap-pretty-icon.png`});

     // Hide element
     await elementLocator.evaluate(node => node.classList.add('d-none'));
});
