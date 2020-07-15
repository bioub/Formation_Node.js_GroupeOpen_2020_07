function setTimeout(callbackFn, delayMs) {
  // blocker le thread delayMs ms
  const debut = Date.now();
  while (debut + delayMs > Date.now());

  callbackFn();
}

// ... 1s ... 0 ... 1s ...  1 ... 1s ...  2
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function pause(delayMs) {
  // blocker le thread delayMs ms
  const debut = Date.now();
  while (debut + delayMs > Date.now());
}

// ... 1s ... 0 ... 1s ...  1 ... 1s ...  2
for (var i = 0; i < 3; i++) {
  pause(1000);
  console.log(i);
}
