// utiliser minimist ou yargs
console.log(process.argv.slice(2));

// current working dir
// -> le dossier dans lequel se trouve le terminal
console.log(process.cwd());
process.chdir('..');
console.log(process.cwd());

// Variables d'environnement :
// Mettez les en cache, ne pas relire process.env dans tout le programme
console.log(process.env.NODE_ENV ?? 'development');

// darwin sur MacOS
console.log(process.platform);
console.log(process.uptime())

// kill le process
process.exit(0); // sans code d'erreur
process.exit(1); // avec un code d'erreur
