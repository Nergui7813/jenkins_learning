const { chromium } = require('playwright');
const assert = require('assert');

(async () => {
  // Launch Chromium browser in non-headless mode
  const browser = await chromium.launch({ headless: true });

  // Create a new context (browser context)
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Navigate to Google
  await page.goto('https://petstore.swagger.io/#/');

  await page.waitForSelector('.opblock-tag-section.is-open');

  const getPetsByStatusButoon = page.locator(".opblock-summary-method").nth(3);
  await getPetsByStatusButoon.click();
  await page.getByRole('button', { name: 'Try it out' }).click();
  await page.getByRole('listbox').selectOption('available');

//   await page.route('**/v2/pet/findByStatus?status=available', async route => {
//   const response = await route.fetch();
//   const json = await response.json();
//   json.message['big_red_dog'] = [];
//   await route.fulfill({ response, json });
// });
  const responsePromise = page.waitForResponse('**/v2/pet/findByStatus?status=available');
  await page.getByRole('button', { name: 'Execute' }).click();
  const response = await responsePromise;
  const responseBody = await response.json();;
  // console.log(responseBody[0]);
  assert(Array.isArray(responseBody), 'Expected api to return an array');
  const doggo_uno = {
    "id": 112,
    "category": {
        "id": 86,
        "name": "Vasya"
    },
    "name": "doggie",
    "photoUrls": [
        "aaaa"
    ],
    "tags": [
        {
            "id": 435,
            "name": "aaaaa"
        }
    ],
    "status": "available"
};
  assert.equal(responseBody[0], doggo_uno, 'Expected the first doggo in the list to be Vasya');

 
  // await page.locator('pre').filter({ hasText: '[ { "id": 111, "category' }).click();



    // Close the browser
    await browser.close();
})();
