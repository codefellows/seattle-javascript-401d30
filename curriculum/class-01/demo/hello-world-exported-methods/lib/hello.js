'use strict';

// Rather than return a function, this time, we are exposing an object through module.exports
module.exports = exports = {};

exports.myModuleName = '401js Hello World Module';

// Here, we're exporting a method called "sayHello".
// Notice that it calls an internal helper function to do it's job
// That function is not part of our interface, as it is not exported
exports.sayHello = (name) => {
  return getMessage(name);
};

// Export another function
exports.sayGoodbye = () => {
  return 'Goodbye';
};

// Internal Helper Function -- because this is not hung on the module.exports object, this is not
// exported as a part of our interface
const getMessage = (name) => {
  return `Hello, ${name}`;
};

// Another internal function.  This is not callable by our clients, because it's not exported
const sayHey = () => {
  return 'Yo, dude....';
};