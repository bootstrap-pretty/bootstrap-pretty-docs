import { test, expect } from '@playwright/test';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const PALETTES = require('bootstrap-pretty/palettes.json');

test.use({ viewport: { width: 600, height: 630 } });

test('take screenshots of dark and light mode palettes', async ({ page }) => {
    for (const palette of PALETTES) {
        // Navigate to the URL
        await page.goto(`/share-images/${palette.slug}`);

        // Show light mode element
        const lightLocator = await page.locator('#playwrightPaletteLight');
        await lightLocator.evaluate(node => node.classList.remove('d-none'));

        // Wait for fonts to load
        await page.evaluate(() => document.fonts.ready);

        // Take light mode screenshot
        await lightLocator.screenshot({path: `./public/images/playwright/${palette.slug}/${palette.palette}-light.png`});

        // Hide light mode element
        await lightLocator.evaluate(node => node.classList.add('d-none'));

        // Show light mode element
        const lightLocatorOg = await page.locator('#playwrightPaletteLightOg');
        await lightLocatorOg.evaluate(node => node.classList.remove('d-none'));

        // Take light mode screenshot
        await lightLocatorOg.screenshot({path: `./public/images/playwright/${palette.slug}/${palette.palette}-light-og.png`});

        // Hide light mode element
        await lightLocatorOg.evaluate(node => node.classList.add('d-none'));

        // Toggle dark mode
        const htmlLocator = await page.locator('html');
        await htmlLocator.evaluate(node => node.setAttribute('data-bs-theme', 'dark'));

        // Show dark mode element
        const darkLocator = await page.locator('#playwrightPaletteDark');
        await darkLocator.evaluate(node => node.classList.remove('d-none'));

        // Take dark mode screenshot
        await darkLocator.screenshot({path: `./public/images/playwright/${palette.slug}/${palette.palette}-dark.png`});

        // Hide dark mode element
        await darkLocator.evaluate(node => node.classList.add('d-none'));

        // Show dark mode element
        const darkLocatorOg = await page.locator('#playwrightPaletteDarkOg');
        await darkLocatorOg.evaluate(node => node.classList.remove('d-none'));

        // Take dark mode screenshot
        await darkLocatorOg.screenshot({path: `./public/images/playwright/${palette.slug}/${palette.palette}-dark-og.png`});

        // Hide dark mode element
        await darkLocatorOg.evaluate(node => node.classList.add('d-none'));

        // Toggle light mode
        await htmlLocator.evaluate(node => node.setAttribute('data-bs-theme', 'light'));
    }
});

test.use({ viewport: { width: 600, height: 315 } });

test('preview list - take screenshot of combined dark and light mode screenshots', async ({ page }) => {
    // Wait here before starting the test to ensure screenshots from previous test are saved
    await new Promise(resolve => setTimeout(resolve, 5000));

    for (const palette of PALETTES) {
        // Navigate to the URL
        await page.goto(`/share-images/${palette.slug}`);

        // Show element
        const elementLocator = await page.locator('#playwrightPaletteCombined');
        await elementLocator.evaluate(node => node.classList.remove('d-none'));

        // Wait for fonts to load
        await page.evaluate(() => document.fonts.ready);

        // Take screenshot
        await elementLocator.screenshot({path: `./public/images/playwright/${palette.slug}/${palette.palette}.png`});

        // Hide element
        await elementLocator.evaluate(node => node.classList.add('d-none'));
    }
});

test.use({ viewport: { width: 1200, height: 630 } });

test('og - take screenshot of combined dark and light mode screenshots', async ({ page }) => {
    // Wait here before starting the test to ensure screenshots from previous test are saved
    await new Promise(resolve => setTimeout(resolve, 5000));

    for (const palette of PALETTES) {
        // Navigate to the URL
        await page.goto(`/share-images/${palette.slug}`);

        // Show element
        const elementLocator = await page.locator('#playwrightPaletteCombinedOg');
        await elementLocator.evaluate(node => node.classList.remove('d-none'));

        // Wait for fonts to load
        await page.evaluate(() => document.fonts.ready);

        // Take screenshot
        await elementLocator.screenshot({path: `./public/images/playwright/share-images/palettes/${palette.palette}-og.png`});

        // Hide element
        await elementLocator.evaluate(node => node.classList.add('d-none'));
    }
});

