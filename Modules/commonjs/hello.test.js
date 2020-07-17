const assert = require('assert');
const hello = require('./hello').default;

try {
  assert.equal(hello('Romain'), 'Hello Romain !');
  console.log('Tests OK');
} catch (error) {
  console.log('Tests KO');
  process.exit(1);
}
