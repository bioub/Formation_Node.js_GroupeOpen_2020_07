function externe(msg) {
  function interne() {
    console.log(msg)
  }
  return interne;
}

const hello = externe('Hello');
hello();

// pile d'appel
// ^
// |
// |          log
// |externe - interne
// +----------------------------------------> temps

// ... 1s ... 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// pile d'appel
// ^
// |
// |                                lg   lg   lg
// |for { st - st - st } ... 0s ... => - => - =>
// +-------------------------------------------------> temps
//                                  3    3    3

// ... 1s ... 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// pile d'appel
// ^
// |
// |                                lg   lg   lg
// |for { st - st - st } ... 1s ... => - => - =>
// +-------------------------------------------------> temps
//                                  0    1    2

// ... 1s ... 0 1 2
for (let i = 0; i < 3; i++) { // portée de bloc
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
