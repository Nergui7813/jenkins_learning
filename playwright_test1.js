const { chromium } = require('playwright');
const assert = require('assert');

(async () => {
  // Launch Chromium browser in non-headless mode
  const browser = await chromium.launch({ headless: false });

  // Create a new context (browser context)
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Check if the cookie button is present
  const cookieButton = await page.$('#W0wltc > div');
  if (cookieButton) {
    // Click the cookie button to reject cookie settings
    await cookieButton.click();
  }
  // await page.pause();
  // Search for the word 'Nemesis'
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Nemesis');

  // Press Enter to perform the search
  await page.keyboard.press('Enter');

  // Wait for the search results to load
  await page.waitForSelector('.v7W49e');

  // Extract the titles and URLs of the first three search results -> kind of only extracts the first one
  const results = await page.$$eval('.v7W49e', (links) => {
    return links.slice(0, 9).map((link) => {
      const titleElement = link.querySelector('h3');
      const urlElement = link.querySelector('a');

      return {
        title: titleElement ? titleElement.innerText : 'No title found',
        url: urlElement ? urlElement.href : 'No URL found',
      };
    });
  });

  // Log the results
  console.log('Search Results:', results);

  // check answer
//   const expected_answer = [
//     {
//       title: 'Nemesis',
//       url: 'https://languages.oup.com/google-dictionary-en'
//     }
//   ]
//   assert.equal(results, expected_answer, 'Expected results to be from google-dictionary');
  // Keep the browser open for inspection (close manually when done)
  // await new Promise(() => {});

    // Close the browser
    await browser.close();
})();
