const { EventEmitter } = require('events');
const { setImmediate } = require('timers');


class UserService extends EventEmitter {
  constructor() {
    super();
  }
  create(user) {
    process.nextTick(() => { // Guide Node -> Timer / process.nextTick
      this.emit('user.pre-create', user)
    });
    // todo insert into DB
    this.emit('user.post-create', user)
  }
}


// Dans un projet A
const userServiceA = new UserService();
userServiceA.on('user.pre-create', (user) => {
  // valider ?
  console.log('validate 1', user);
});
userServiceA.on('user.pre-create', (user) => {
  // valider ?
  console.log('validate 2', user);
});

userServiceA.create({name: 'Romain'});
userServiceA.create({name: 'Titi'});

// userServiceA.removeAllListeners('user.pre-create');
userServiceA.create({name: 'Tata'});

// Dans un projet B
const userServiceB = new UserService();

userServiceB.once('user.pre-create', (user) => {
  // logger ?
  console.log('log', user);
});

userServiceB.create({name: 'Toto'});
userServiceB.create({name: 'Tata'});

console.log('Fin');
