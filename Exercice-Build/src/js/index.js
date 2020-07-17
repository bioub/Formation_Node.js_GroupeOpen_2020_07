// Module IIFE
// Immediately Invoked Function Expression
(function(global, Clock) {
  'use strict';

  const divElt = document.querySelector('.horloge');
  const clock = new Clock(divElt);
  clock.start();

}(window, Clock));
