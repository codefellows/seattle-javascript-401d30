'use strict';

// module.exports represents our 'interface' to the outside world.
// Anything that we attach to the exports object is therefore "exposed" or "exported" publicly
// In this case, we're exposing just a raw function, so that when we are "required" in, the user can just run this as a method.
module.exports = exports = (name) => {
  console.log( `Hello ${name}` );
};



