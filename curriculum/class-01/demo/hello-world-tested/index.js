'use strict';

// Pull in our 'hello' module
const hello = require('./lib/hello.js');

// Do something simple using its interface
console.log( hello.sayHello('John') );