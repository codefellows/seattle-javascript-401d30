'use strict';

// Animal Constructor
const Animal = function(name) {
  this.name = name;
};

// Animal's walk prototype method
Animal.prototype.walk = () => {
  console.log('Walking ...');
};

// Dog Constructor
const Dog = function(name) {
  // Inherit/Become the Animal constructor
  Animal.call(this, name);
};

// Attach esoteric props and methods to the dog prototype
Dog.prototype = new Animal();

// Dog specific prototype methods
Dog.prototype.speak = () => {
  console.log('WOOF!');
};

module.exports = Dog;
