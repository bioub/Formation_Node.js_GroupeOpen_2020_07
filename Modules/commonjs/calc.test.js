const assert = require('assert'); // binaire node
const chalk = require('chalk'); // node_modules/chalk
const calc = require('./calc'); // fichier local

try {
  assert.equal(calc.sum(1, 2), 3);
  console.log(chalk.green('Tests OK'));
} catch (error) {
  console.log(chalk.red('Tests KO'));
  process.exit(1);
}
