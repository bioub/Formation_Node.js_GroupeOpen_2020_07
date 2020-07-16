const os = require('os');

console.log(os.uptime()); // systeme

console.log(os.cpus().length);

console.log(os.platform());


// mémoire
console.log(os.freemem());
console.log(os.totalmem());