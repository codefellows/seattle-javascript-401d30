'use strict';

let person = {name:'John'};

/**
 * sayHello() ... will use city and state as params but needs
 * to have context applied (via apply()) for this.name to work.
 * @param city
 * @param state
 * @returns {string}
 */
function sayHello(city,state) {
  // this.name will come when you apply(obj,...)
  // Note that this of course assumes that the obj
  // has a "name" property
  return `${this.name} is from ${city}, ${state}`;
}

// First param to apply is the object to serve as context
// 2nd param in an array, which JS spreads out into params.
console.log(sayHello.apply(person, ['Seattle', 'WA']));

