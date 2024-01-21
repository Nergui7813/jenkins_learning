const assert = require('assert');
const superagent = require('superagent');

// Example: Test the Star Wars API endpoint for species information
superagent.get('https://swapi.dev/api/species/1')
  .then(response => {
    // Use assert to make assertions about the response
    assert.strictEqual(response.status, 200, 'Expected status code 200');
    assert.strictEqual(response.body.name, 'Human', 'Expected species name to be Human');
    console.log('Call for species 1 OK!');
  })
  .catch(error => {
    // Handle errors
    console.error('Test failed:', error.message);
  });

  superagent.get('https://swapi.dev/api/species/2')
  .then(response => {
    // Use assert to make assertions about the response
    assert.strictEqual(response.status, 200, 'Expected status code 200');
    assert.strictEqual(response.body.name, 'Droid', 'Expected species name to be Droid');
    assert.strictEqual(response.body.classification, 'artificial', 'Expected species classification to be artificial');
    assert.strictEqual(response.body.homeworld, 'DXF23RT', `Expected species homeworld to be DXF23RT but got ${response.body.homeworld}`);
    console.log('Call for species 2 OK!');
  })
  .catch(error => {
    // Handle errors
    console.error('Call for species 2 failed:', error.message);
  });
