const assert = require('assert');

function pileOuFace() {
  return Math.random() > 0.5 ? 'pile' : 'face';
}

const backupRandom = Math.random;
Math.random = () => 0.75;
assert.equal(pileOuFace(), 'pile');
Math.random = () => 0.25;
assert.equal(pileOuFace(), 'face');

Math.random = backupRandom;
assert.equal(pileOuFace(), 'face');
