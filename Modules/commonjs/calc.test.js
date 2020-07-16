const assert = require('assert');
const calc = require('./calc');

try {
    assert.equal(calc.sum(1, 2), 3);
    console.log('Tests OK');
} catch (error) {
    console.log('Tests KO');
}