'use strict';

let john = {name:"John", age:49};
let cathy = {name:"Cathy", age: NaN};

function sayHello(day) {
  return `${this.name} is ${this.age} old on ${day}`;
}

console.log( sayHello.call(john, "Tuesday") );
console.log( sayHello.call(cathy, "Tuesday") );

let nums = [1,2,3,4];
let nums2 = new Array(1,2,3,4);
console.log( nums.map( (i) => i*2 ) );
console.log( Array.prototype.map.call(nums, n=>n*2) );
















