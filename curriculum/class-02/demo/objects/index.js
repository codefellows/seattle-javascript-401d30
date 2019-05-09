'use strict';

/**
 * Demonstrate the differences between the various ways
 * to create instances.  This should lead us from what
 * we have been using in 301 (constructor functions) and
 * into where we are headed in 401 (classes)
 *
 * This also introduces factory functions as another means
 * of comparison.
 */

// const dogClass = require('./class.js');
const dogFactory = require('./factory.js');
// const dogConstructor = require('./constructor.js');

// const rosieViaConstructor = new dogConstructor("Rosie");
// console.log(rosieViaConstructor);
// rosieViaConstructor.walk();
// rosieViaConstructor.speak();

const rosieViaFactory = dogFactory("Rosie");
console.log(rosieViaFactory);
rosieViaFactory.walk();
rosieViaFactory.speak();

// const rosieViaClass = new dogClass("Rosie");
// console.log(rosieViaClass);
// rosieViaClass.walk();
// rosieViaClass.speak();
