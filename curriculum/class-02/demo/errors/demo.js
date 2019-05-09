'use strict';

let person = {
  firstName: 'John',
  phone: {
    homex: {
      color: 'red',
    },
  },
};

// This will bomb your entire app with a catastrophic
// Error (uncomment to see)
// Definitely not being a 'good citizen' if you don't
// account for, test for, and protect yourself when
// trying to use deeply nested object properties that
// may not exist...

let color = person.phone.home.color || 'green';

// One way to look deep into an object is to "build up"
// the property chain member by member.  You will end with
// the last one, if all of these are true.
// In this example, we set "green" as the fallback.

// let color = (person && person.phone && person.phone.home && person.phone.home.color ) || 'green';

console.log(color);

// Another way of doing this is to wrap such checks in a
// try ... catch block.  This is a little bit more verbose
// but is also quite readable and gives you the opportunity to
// execute logic in both areas, and control your error
// handling.  As of v8, this is now optimized in Node.js
let thing = {};
try {
  thing = person.phone.home.color;
}
catch(e) { console.log('Property not defined, reverting'); }
console.log(thing);

// Know that you can always throw your own errors ...
throw new Error('You really messed up!');

// but better would be to implement an error handling module
// and use that within all of your code.  This would allow you
// control how it logs, looks, and functions.  For example...

// Bring in some module (perhaps one that you've written) that is
// designed to deal with specifially formatted errors
const errorHandler = require('errorhandler');

try {
  /// something that could fail
}
catch(e) {

  // create an error object designed for that custom
  // errorHandler

  let error = {
    timestamp: new Date(),
    severity: 3,
    reason: 'Something went wrong',
    timestamp: new Date(),
    message: e.message,
    file: e.file,
    position: e.column,
    stack: e.stack,
  };

  // Delegate the handling of this error to that module.
  // You don't have to care what it does from here, it'll deal with
  // it for you as it was designed to.
  errorHandler.dealWith(error);
}
