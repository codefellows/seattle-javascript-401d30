'use strict';

const Animal = () => ({
  walk: () => {
    console.log('Walking ...');
  },
});

function DogFactory(name) {
  let dog = Object.assign(
    {},
    {name},
    {speak},
    Animal()
  );

  function speak () { console.log('WOOF!'); }

  return Object.freeze(dog);
}

module.exports = DogFactory;


