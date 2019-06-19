'use strict';

const ARRAY_LENGTH = 40;

// Vinicio - O(n) where n is the length of the string
const naiveHash = stringInput => {
  let hashCode = 0;
  for (let index in stringInput) {
    hashCode += Math.pow(index,stringInput.charCodeAt(index));
  }
  return hashCode % ARRAY_LENGTH;
};

console.log(naiveHash('kaluaoehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhtsi'));
console.log(naiveHash('lika'));
