const glob = require('glob');

glob('**/*.test.js', (err, matches) => {
  for (const match of matches) {
    require('./' + match);
  }
});
