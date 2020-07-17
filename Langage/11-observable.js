const { Observable } = require('rxjs')

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      // appel du callback du then
      observer.next();
    }, delayMs);
  });
}

interval(1000).subscribe(() => console.log('1s'));
