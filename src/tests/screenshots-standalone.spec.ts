import { test, expect } from '@playwright/test';
import { NAVIGATION_LINKS } from '@config';

test.use({ viewport: { width: 1200, height: 630 } });

test('og - take screenshots of standalone pages', async ({ page }) => {
    for (const link of NAVIGATION_LINKS) {
        if (link.playwrightCategory === 'standalone') {
            // Navigate to the URL
            await page.goto(`/share-images/${link.slug}`);

            // Show element
            const elementLocator = await page.locator('#playwrightStandaloneOg');
            await elementLocator.evaluate(node => node.classList.remove('d-none'));

            // Wait for fonts to load
            await page.evaluate(() => document.fonts.ready);

            // Take screenshot
            await elementLocator.screenshot({path: `./public/images/playwright/share-images/${link.slug}-og.png`});

            // Hide element
            await elementLocator.evaluate(node => node.classList.add('d-none'));
        }
    }
});
