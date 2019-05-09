'use strict';

// Pull in our 'hello' module
const hello = require('./lib/hello.js');

// What is 'hello?'  As you'll see from this console.log, it's an object with 2 methods and one property
// The 2 methods are the ones that are attached to the "exports" object in the module we required in.
console.log(hello);

// sayHello() returns a value to us, so we'll capture that
let greeting = hello.sayHello('john');

// ... and print it out
console.log(greeting);

// We can call sayGoodbye() because it was exported from the module.
console.log( hello.sayGoodbye() );

// sayHey() was not imported, so technically it doesn't exist to the outside world.
// We should get a "function does not exist" error here
console.log( hello.sayHey() );
