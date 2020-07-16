const assert = require('assert');
const chalk = require('chalk');
const calc = require('./calc');

try {
    assert.equal(calc.sum(1, 2), 3);
    console.log(chalk.green('Tests OK'));
} catch (error) {
    console.log(chalk.red('Tests KO'));
    process.exit(1);
}